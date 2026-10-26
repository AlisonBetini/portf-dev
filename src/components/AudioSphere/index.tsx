import { useEffect, useRef } from "react";

import { AudioSphereContainer } from "./styles";

// Live audio energy (0..1), mutated outside React so the sphere can react every frame.
export type AudioLevel = { bass: number; level: number };

interface AudioSphereProps {
  analyserRef: { current: AnalyserNode | null }
  levelRef: { current: AudioLevel }
}

const RING_SAMPLES = 192
// Neighbouring samples blended on each side, so the ring forms broad lobes instead of jagged spikes.
const RING_BLUR = 5
const LATITUDES = 26
const LONGITUDES = 52
// Frequency bins mapped around the ring; the top of the spectrum is mostly silent.
const FIRST_BIN = 2
const BIN_SPAN = 90

// Unit-sphere grid; drawn as dots it reads as latitude/longitude lines, like the reference.
const POINTS = (() => {
  const points: { theta: number; phi: number }[] = []
  for (let i = 1; i < LATITUDES; i++) {
    const theta = (i / LATITUDES) * Math.PI
    for (let j = 0; j < LONGITUDES; j++) points.push({ theta, phi: (j / LONGITUDES) * Math.PI * 2 })
  }
  return points
})()

export function AudioSphere({ analyserRef, levelRef }: AudioSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!container || !canvas || !ctx) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    const smooth = new Float32Array(RING_SAMPLES)
    const shape = new Float32Array(RING_SAMPLES)
    let bins = new Uint8Array(0)
    let width = 1
    let height = 1
    let ratio = 1
    let time = 0
    let spin = 0
    let ringSpin = 0
    let last = 0
    let raf = 0
    let visible = true

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, container.clientWidth)
      height = Math.max(1, container.clientHeight)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    // Spectrum value for a ring sample, mirrored so both halves of the ring move together.
    const sampleSpectrum = () => {
      const analyser = analyserRef.current
      if (analyser) {
        if (bins.length !== analyser.frequencyBinCount) bins = new Uint8Array(analyser.frequencyBinCount)
        analyser.getByteFrequencyData(bins)
      }
      const half = RING_SAMPLES / 2
      for (let i = 0; i < RING_SAMPLES; i++) {
        const k = i < half ? i : RING_SAMPLES - i
        const bin = FIRST_BIN + Math.floor((k / half) * BIN_SPAN)
        const target = bins.length ? Math.pow((bins[bin] ?? 0) / 255, 1.6) : 0
        // Fast attack, slower release: spikes punch out on hits and melt back.
        smooth[i] += (target - smooth[i]) * (target > smooth[i] ? 0.55 : 0.12)
      }
      for (let i = 0; i < RING_SAMPLES; i++) {
        let sum = 0
        for (let k = -RING_BLUR; k <= RING_BLUR; k++) sum += smooth[(i + k + RING_SAMPLES) % RING_SAMPLES]
        shape[i] = sum / (RING_BLUR * 2 + 1)
      }
    }

    const ringPath = (cx: number, cy: number, radius: number, gain: number, offset: number, begin = true) => {
      if (begin) ctx.beginPath()
      for (let i = 0; i <= RING_SAMPLES; i++) {
        const index = i % RING_SAMPLES
        const angle = (index / RING_SAMPLES) * Math.PI * 2 + ringSpin
        // Idle ripple keeps the ring alive even when nothing is playing.
        const idle = Math.sin(angle * 5 + time * 1.4 + offset) * 0.012 + Math.sin(angle * 3 - time * 0.9) * 0.008
        const r = radius * (1 + idle + shape[index] * gain)
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
    }

    const draw = () => {
      const { bass, level } = levelRef.current
      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.34
      ctx.clearRect(0, 0, width, height)

      // Dot sphere: spins, tilts and twists into a vortex with the bass.
      const sphereRadius = radius * 0.94
      const tilt = 0.45 + Math.sin(time * 0.35) * 0.35
      const twist = Math.sin(time * 0.6) * 1.2 + bass * 4.5
      const camera = radius * 3.2
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 0.96, 0, Math.PI * 2)
      ctx.clip()
      ctx.fillStyle = "#9FE3FF"
      for (const { theta, phi } of POINTS) {
        const swirl = phi + spin + twist * (theta - Math.PI / 2)
        const pulse = 1 + bass * 0.14 * Math.sin(theta * 6 + time * 4)
        const r = sphereRadius * pulse
        const x = r * Math.sin(theta) * Math.cos(swirl)
        const y = r * Math.cos(theta)
        const z = r * Math.sin(theta) * Math.sin(swirl)
        const y2 = y * Math.cos(tilt) - z * Math.sin(tilt)
        const z2 = y * Math.sin(tilt) + z * Math.cos(tilt)
        const scale = camera / (camera - z2)
        const depth = (z2 / sphereRadius + 1) / 2
        ctx.globalAlpha = 0.12 + depth * 0.55 + level * 0.25
        const size = (0.8 + depth * 1.1) * scale
        ctx.fillRect(cx + x * scale - size / 2, cy + y2 * scale - size / 2, size, size)
      }
      ctx.restore()
      ctx.globalAlpha = 1

      // Spectrum ring: a thick glowing band whose edges follow the frequencies.
      const gradient = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius)
      gradient.addColorStop(0, "#4CC2E9")
      gradient.addColorStop(0.5, "#2F3BFF")
      gradient.addColorStop(1, "#4CC2E9")

      ctx.save()
      ctx.shadowColor = "#4CC2E9"
      ctx.shadowBlur = 24 + level * 30
      ctx.fillStyle = gradient
      ringPath(cx, cy, radius * 1.06, 0.2, 0)
      ringPath(cx, cy, radius * 0.97, -0.06, 1.7, false)
      ctx.fill("evenodd")
      ctx.restore()

      // Thin offset strands give the band its layered, ribbon-like texture.
      ctx.lineWidth = 1.2
      ctx.strokeStyle = "rgba(225, 246, 255, 0.55)"
      ringPath(cx, cy, radius * 1.02, 0.16, 3.1)
      ctx.stroke()
      ctx.strokeStyle = "rgba(76, 194, 233, 0.5)"
      ringPath(cx, cy, radius * 1.08, 0.24, 4.6)
      ctx.stroke()
    }

    const frame = (now: number) => {
      raf = 0
      if (!visible || document.hidden) return
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60
      last = now
      const { bass, level } = levelRef.current
      // With prefers-reduced-motion the idle sphere holds still, but it always reacts to music the visitor started.
      const active = !reduce || level > 0.001 || bass > 0.001
      if (active) {
        time += dt
        spin += dt * (0.25 + level * 1.6)
        ringSpin += dt * (0.08 + level * 0.5)
      }
      sampleSpectrum()
      draw()
      raf = requestAnimationFrame(frame)
    }

    const wake = () => {
      if (!raf && visible && !document.hidden) {
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
      draw()
    })
    resizeObserver.observe(container)
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting)
      if (visible) wake()
    })
    intersection.observe(container)
    const onVisibility = () => wake()
    document.addEventListener("visibilitychange", onVisibility)

    resize()
    draw()
    wake()

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      intersection.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [analyserRef, levelRef])

  return (
    <AudioSphereContainer ref={containerRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
    </AudioSphereContainer>
  )
}
