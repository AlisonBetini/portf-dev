import styled, { keyframes } from "styled-components";

// Stray strokes fly in toward the center and burn out as the logo forms.
const shard = keyframes`
  0% {
    opacity: 0;
    transform: translate(calc(var(--x) * 2.2), calc(var(--y) * 2.2));
  }
  25% {
    opacity: 1;
  }
  70% {
    opacity: 1;
    transform: translate(var(--x), var(--y));
  }
  100% {
    opacity: 0;
    transform: translate(calc(var(--x) * 0.6), calc(var(--y) * 0.6));
  }
`

// Glitchy build: the word is wiped in by uneven steps while jittering sideways.
const glitchIn = keyframes`
  0% { opacity: 0; clip-path: inset(0 100% 0 0); transform: translateX(-4px); }
  20% { opacity: 1; clip-path: inset(0 70% 40% 0); transform: translateX(3px); }
  35% { clip-path: inset(30% 45% 0 0); transform: translateX(-2px); }
  55% { clip-path: inset(0 25% 20% 0); transform: translateX(2px); }
  75% { clip-path: inset(10% 8% 0 0); transform: translateX(-1px); }
  100% { opacity: 1; clip-path: inset(0 0 0 0); transform: translateX(0); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const lineDraw = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`

const letterIn = keyframes`
  0% { opacity: 0; transform: translateY(4px); }
  50% { opacity: 0.4; }
  60% { opacity: 1; }
  70% { opacity: 0.5; }
  100% { opacity: 1; transform: translateY(0); }
`

export const PreloaderContainer = styled.div<{ $exitDuration: number }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  transition: opacity ${props => props.$exitDuration * 0.6}ms ease ${props => props.$exitDuration * 0.4}ms;

  .badge {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 260px;
  }

  /* Starts at 9 o'clock and draws downward, like the reference */
  .progress-ring {
    position: absolute;
    inset: 0;
    transform: rotate(180deg) scaleY(-1);
    overflow: visible;

    circle {
      fill: none;
      stroke-width: 1.5;
    }

    .track {
      stroke: rgba(255, 255, 255, 0.05);
    }

    .progress {
      stroke: ${props => props.theme['accent-glow']};
      stroke-linecap: round;
      filter: drop-shadow(0 0 6px ${props => props.theme['accent']});
      transition: stroke-dashoffset 80ms linear;
    }
  }

  .shards span {
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff;
    opacity: 0;
    animation: ${shard} 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .logo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
  }

  .lets {
    font-family: "Michroma", sans-serif;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    opacity: 0;
    animation: ${glitchIn} 0.5s steps(6) 0.35s forwards;
  }

  .rock {
    margin-top: 0.15rem;
    font-family: "Bebas Neue", "Oswald", sans-serif;
    font-size: 3.6rem;
    letter-spacing: 0.01em;
    opacity: 0;
    animation: ${glitchIn} 0.6s steps(8) 0.55s forwards;
  }

  .the {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 0.2rem;
    font-family: "Michroma", sans-serif;
    font-size: 0.5rem;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.75);
    opacity: 0;
    animation: ${fadeIn} 0.3s ease 0.85s forwards;
  }

  .the::before,
  .the::after {
    content: '';
    width: 1.6rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.7);
    transform: scaleX(0);
    animation: ${lineDraw} 0.4s ease 0.85s forwards;
  }

  .the::before {
    transform-origin: right;
  }

  .the::after {
    transform-origin: left;
  }

  .future {
    margin-top: 0.3rem;
    font-family: "Michroma", sans-serif;
    font-size: 0.95rem;
    letter-spacing: 0.12em;
    color: ${props => props.theme['accent-glow']};
    text-shadow: 0 0 12px rgba(76, 194, 233, 0.7);

    span {
      display: inline-block;
      opacity: 0;
      animation: ${letterIn} 0.35s ease forwards;
    }
  }

  .percent {
    position: absolute;
    bottom: 26px;
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.6);
    font-variant-numeric: tabular-nums;
  }

  /* Exit: the logo dissolves piece by piece, then the overlay fades to reveal the site */
  &.exiting {
    opacity: 0;

    .lets,
    .rock,
    .the,
    .future,
    .percent,
    .progress-ring {
      transition: opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease;
      opacity: 0;
      filter: blur(6px);
    }

    .rock {
      transform: scale(1.08);
    }

    .the,
    .future {
      transition-delay: 0.12s;
    }

    .progress-ring {
      transition-delay: 0.2s;
    }
  }
`
