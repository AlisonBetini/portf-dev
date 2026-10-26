import { useEffect, useRef, useState, type CSSProperties } from "react";
import styled from "styled-components";

import { displayFont } from "@/styles/futuristic";
import { PRELOADER_DONE_EVENT } from "../Preloader/events";

interface SectionTitleProps {
  index: string
  kicker: string
  title: string
  id?: string
}

const LOAD_DURATION = 1600

// Same "locks in at the end" curve as the preloader counter.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function SectionTitle({ index, kicker, title, id }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  // The line "loads" once, the first time the title scrolls into view.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Runs even with prefers-reduced-motion: it is a short in-place fill, not movement across the screen.
    let frame = 0

    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      let start = 0
      const tick = (now: number) => {
        if (!start) start = now
        const t = Math.min(1, (now - start) / LOAD_DURATION)
        setProgress(Math.round(easeOutCubic(t) * 100))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    // Wait for the intro screen: on reload the browser restores the scroll position and a title
    // already on screen would otherwise finish loading behind the preloader.
    const start = () => observer.observe(container)
    if (document.documentElement.dataset.preloaded) start()
    else window.addEventListener(PRELOADER_DONE_EVENT, start, { once: true })

    return () => {
      window.removeEventListener(PRELOADER_DONE_EVENT, start)
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <TitleContainer id={id} ref={containerRef} className={progress === 100 ? "loaded" : undefined}>
      <span className="kicker">
        <span className="index">{index}</span> {kicker}
      </span>
      <h2>{title}</h2>
      <div className="line" style={{ "--progress": progress / 100 } as CSSProperties}>
        <span className="fill" />
        <span className="head" />
        <span className="percent">{String(progress).padStart(3, "0")}%</span>
      </div>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  .kicker {
    ${displayFont}
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    color: ${props => props.theme['accent-glow']};
  }

  .index {
    color: ${props => props.theme['gray-300']};
    margin-right: 0.5rem;
  }

  h2 {
    ${displayFont}
    margin-top: 0.75rem;
    font-size: clamp(1.4rem, 4vw, 2.25rem);
    letter-spacing: 0.08em;
    color: #fff;
    text-shadow: 0 0 24px rgba(76, 194, 233, 0.3);
  }

  .line {
    position: relative;
    margin-top: 1.25rem;
    height: 1px;
    margin-right: 3.5rem;
    background: rgba(255, 255, 255, 0.06);
  }

  .fill {
    position: absolute;
    inset: 0;
    transform-origin: left;
    transform: scaleX(var(--progress));
    background: linear-gradient(to right, ${props => props.theme['accent']}, ${props => props.theme['accent-glow']});
    box-shadow: 0 0 10px ${props => props.theme['accent-glow']};
  }

  /* Glowing block riding the front of the fill */
  .head {
    position: absolute;
    top: -2px;
    left: calc(var(--progress) * 100%);
    width: 3rem;
    height: 5px;
    transform: translateX(calc(var(--progress) * -100%));
    background: ${props => props.theme['accent']};
    box-shadow: 0 0 16px ${props => props.theme['accent']};
  }

  .percent {
    ${displayFont}
    position: absolute;
    right: -3.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.55rem;
    letter-spacing: 0.1em;
    color: ${props => props.theme['gray-300']};
    font-variant-numeric: tabular-nums;
    transition: color 0.4s ease, text-shadow 0.4s ease;
  }

  &.loaded .percent {
    color: ${props => props.theme['accent-glow']};
    text-shadow: 0 0 8px ${props => props.theme['accent-glow']};
  }
`
