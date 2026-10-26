import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FaPause, FaPlay, FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import { AudioSphere, type AudioLevel } from "../AudioSphere";
import { MusicOrbContainer } from "./styles";

// Drop the audio file in public/music and update the metadata below.
const TRACK = {
  src: encodeURI("/music/Lonely Lies, GOLDKID - Interlinked (Ultra Slowed Audio) - GOLDKID.mp3"),
  title: "Interlinked",
  artist: "Lonely Lies, GOLDKID",
}

const DEFAULT_VOLUME = 0.35

interface MusicOrbProps {
  id: string
}

export function MusicOrb({ id }: MusicOrbProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [volume, setVolume] = useState(DEFAULT_VOLUME)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const contextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const frameRef = useRef(0)
  const levelRef = useRef<AudioLevel>({ bass: 0, level: 0 })

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frameRef.current)
      contextRef.current?.close()
      contextRef.current = null
    }
  }, [])

  // Volume is applied after the analyser, so the orb keeps reacting even when the music is quiet.
  const outputVolume = isMuted ? 0 : volume
  useEffect(() => {
    const gain = gainRef.current
    const context = contextRef.current
    if (gain && context) gain.gain.setTargetAtTime(outputVolume, context.currentTime, 0.05)
  }, [outputVolume])

  function analyse() {
    const analyser = analyserRef.current
    const audio = audioRef.current
    if (!analyser || !audio) return

    const bins = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(bins)

    const average = (from: number, to: number) => {
      let sum = 0
      for (let i = from; i < to; i++) sum += bins[i]
      return sum / ((to - from) * 255)
    }

    // Boosted so slower, softer tracks still move the orb a lot.
    const target = audio.paused
      ? { bass: 0, level: 0 }
      : { bass: Math.min(1, average(0, 8) * 1.3), level: Math.min(1, average(0, bins.length) * 1.8) }
    const current = levelRef.current
    // Fast attack and a quick release make the orb snap on every beat.
    const ease = (from: number, to: number) => from + (to - from) * (to > from ? 0.6 : 0.18)
    current.bass = ease(current.bass, target.bass)
    current.level = ease(current.level, target.level)

    if (audio.paused && current.bass < 0.001 && current.level < 0.001) {
      levelRef.current = { bass: 0, level: 0 }
      frameRef.current = 0
      return
    }
    frameRef.current = requestAnimationFrame(analyse)
  }

  async function togglePlay() {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    // The audio graph must be created after a user gesture and only once per element.
    if (!contextRef.current) {
      const context = new AudioContext()
      const analyser = context.createAnalyser()
      analyser.fftSize = 512
      analyser.smoothingTimeConstant = 0.8
      const gain = context.createGain()
      gain.gain.value = outputVolume
      context.createMediaElementSource(audio).connect(analyser)
      analyser.connect(gain)
      gain.connect(context.destination)
      contextRef.current = context
      analyserRef.current = analyser
      gainRef.current = gain
    }

    try {
      await contextRef.current.resume()
      await audio.play()
      setHasError(false)
      if (!frameRef.current) frameRef.current = requestAnimationFrame(analyse)
    } catch {
      setHasError(true)
    }
  }

  return (
    <MusicOrbContainer id={id}>
      <span className="kicker"><span className="index">02</span> Soundtrack</span>
      <h2>No ritmo do código</h2>

      <div className="stage">
        <AudioSphere analyserRef={analyserRef} levelRef={levelRef} />

        <div className="player">
          <div className="controls">
            <button
              type="button"
              className="play"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>

            <div className="volume">
              <button
                type="button"
                className="mute"
                onClick={() => setIsMuted(muted => !muted)}
                aria-label={isMuted ? "Ativar som" : "Silenciar"}
              >
                {outputVolume === 0 ? <FaVolumeMute size={14} /> : outputVolume < 0.5 ? <FaVolumeDown size={14} /> : <FaVolumeUp size={14} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={outputVolume}
                onChange={event => {
                  setVolume(Number(event.target.value))
                  setIsMuted(false)
                }}
                aria-label="Volume"
                style={{ "--fill": `${outputVolume * 100}%` } as CSSProperties}
              />
              <span className="value">{String(Math.round(outputVolume * 100)).padStart(2, "0")}</span>
            </div>
          </div>
          <strong>{TRACK.title}</strong>
          <span>{hasError ? "Não foi possível carregar a música" : TRACK.artist}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={TRACK.src}
        preload="none"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />
    </MusicOrbContainer>
  )
}
