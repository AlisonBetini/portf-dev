import { useEffect, useRef, useState, type CSSProperties } from "react";

import { PRELOADER_DONE_EVENT } from "./events";
import { PreloaderContainer } from "./styles";

const COUNT_DURATION = 2200
const HOLD_AFTER_COUNT = 450
const EXIT_DURATION = 1000

const RING_RADIUS = 118
const RING_LENGTH = 2 * Math.PI * RING_RADIUS

// Fast start that eases into 100, like a loading bar that "locks in" at the end.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

// Stray strokes that fly into the logo while it assembles (offsets in px from the center).
const SHARDS = [
  { x: -46, y: -38, w: 2, h: 12, delay: 0 },
  { x: 38, y: -30, w: 26, h: 1, delay: 0.08 },
  { x: -60, y: 6, w: 18, h: 1, delay: 0.16 },
  { x: 24, y: 22, w: 2, h: 10, delay: 0.1 },
  { x: -8, y: 44, w: 2, h: 8, delay: 0.22 },
  { x: 52, y: 4, w: 2, h: 14, delay: 0.3 },
  { x: -30, y: -6, w: 12, h: 2, delay: 0.36 },
  { x: 10, y: -46, w: 1, h: 18, delay: 0.42 },
  { x: -18, y: 30, w: 22, h: 1, delay: 0.5 },
  { x: 36, y: 40, w: 2, h: 6, delay: 0.58 },
]

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading")
  const frameRef = useRef(0)

  useEffect(() => {
    // Always plays in full, even with prefers-reduced-motion (site owner's choice).
    const duration = COUNT_DURATION
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    let elapsed = 0
    let last = 0
    let exitTimer = 0
    let doneTimer = 0

    const tick = (now: number) => {
      // Advance per frame with a capped step: when WebGL setup blocks the main thread,
      // the counter pauses instead of jumping straight to 90%.
      elapsed += last ? Math.min(now - last, 34) : 0
      last = now
      const t = Math.min(1, elapsed / duration)
      setProgress(Math.round(easeOutCubic(t) * 100))
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick)
        return
      }
      exitTimer = window.setTimeout(() => {
        setPhase("exiting")
        document.body.style.overflow = previousOverflow
        doneTimer = window.setTimeout(() => {
          setPhase("done")
          document.documentElement.dataset.preloaded = "true"
          window.dispatchEvent(new Event(PRELOADER_DONE_EVENT))
        }, EXIT_DURATION)
      }, HOLD_AFTER_COUNT)
    }
    frameRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (phase === "done") return null

  return (
    <PreloaderContainer
      className={phase === "exiting" ? "exiting" : undefined}
      $exitDuration={EXIT_DURATION}
      role="status"
      aria-label={`Carregando ${progress}%`}
    >
      <div className="badge" aria-hidden="true">
        <svg className="progress-ring" viewBox="0 0 260 260">
          <circle className="track" cx="130" cy="130" r={RING_RADIUS} />
          <circle
            className="progress"
            cx="130"
            cy="130"
            r={RING_RADIUS}
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - progress / 100)}
          />
        </svg>

        <div className="shards">
          {SHARDS.map((shard, index) => (
            <span
              key={index}
              style={{
                "--x": `${shard.x}px`,
                "--y": `${shard.y}px`,
                width: shard.w,
                height: shard.h,
                animationDelay: `${shard.delay}s`,
              } as CSSProperties}
            />
          ))}
        </div>

        <div className="logo">
          <span className="lets">Let's</span>
          <span className="rock">Rock</span>
          <span className="the">The</span>
          <span className="future">
            {"Future".split("").map((letter, index) => (
              <span key={index} style={{ animationDelay: `${1.05 + index * 0.08}s` }}>
                {letter}
              </span>
            ))}
          </span>
        </div>

        <span className="percent">{progress}%</span>
      </div>
    </PreloaderContainer>
  )
}
