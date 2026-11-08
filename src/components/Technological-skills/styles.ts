import styled, { keyframes } from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";

const padPulse = keyframes`
  0%, 100% {
    opacity: 0.55;
    transform: translate(-50%, -50%) scale(0.9);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`

const beamFlicker = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.5; }
`

export const TechnologicalSkillsContainer = styled.section`
  margin-top: 6rem;
  padding: 0 1rem;

  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }

  .panel {
    ${glassPanel}
    padding: 1.75rem;
  }

  .panel h3 {
    ${displayFont}
    margin-bottom: 1.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: ${props => props.theme['accent-glow']};
  }

  .rows {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    list-style: none;
  }

  .rows li {
    display: grid;
    grid-template-columns: 1.4rem 5.8rem 1fr 6.2rem;
    align-items: center;
    gap: 0.7rem;
  }

  .icon {
    width: 1.3rem;
    height: 1.3rem;
    color: var(--brand);
  }

  .name {
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
  }

  .bar {
    display: block;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);

    span {
      display: block;
      height: 100%;
      transform: scaleX(0);
      transform-origin: left;
      background: linear-gradient(to right, ${props => props.theme['accent']}, ${props => props.theme['accent-glow']});
      box-shadow: 0 0 10px rgba(76, 194, 233, 0.5);
      transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: calc(var(--order) * 0.08s);
    }
  }

  .revealed .bar span {
    transform: scaleX(var(--fill));
  }

  .time {
    font-size: 0.78rem;
    text-align: right;
    color: ${props => props.theme['gray-300']};
    font-variant-numeric: tabular-nums;
  }

  /* Axis aligned with the bar column, so the bar lengths can actually be read */
  .scale {
    display: flex;
    justify-content: space-between;
    margin: 0.7rem 6.9rem 0 8.6rem;
    font-size: 0.65rem;
    color: rgba(196, 196, 204, 0.6);
  }

  .also {
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    > span {
      ${displayFont}
      font-size: 0.55rem;
      letter-spacing: 0.2em;
      color: ${props => props.theme['gray-300']};
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.75rem;
      list-style: none;
    }

    li {
      padding: 0.25rem 0.6rem;
      font-size: 0.75rem;
      color: ${props => props.theme['accent-glow']};
      background: rgba(76, 194, 233, 0.08);
      border: 1px solid rgba(76, 194, 233, 0.22);
    }
  }

  /* Palm of the hand in the photo: 81.5% across and 69.5% down */
  /* Narrower than its column because the cloud overhangs the photo on the right */
  .stage {
    position: relative;
    width: 92%;
    margin-right: auto;
  }

  .person {
    display: block;
    width: 100%;
    /* The photo has its own black backdrop: feather the edges so it melts into the page */
    -webkit-mask-image:
      linear-gradient(to right, transparent, #000 10%, #000 96%, transparent),
      linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent, #000 10%, #000 96%, transparent),
      linear-gradient(to bottom, transparent, #000 16%, #000 84%, transparent);
    mask-composite: intersect;
  }

  .pad {
    position: absolute;
    left: 81.5%;
    top: 69.5%;
    width: 24%;
    aspect-ratio: 4 / 1;
    border: 1px solid ${props => props.theme['accent-glow']};
    border-radius: 50%;
    box-shadow: 0 0 18px ${props => props.theme['accent-glow']}, inset 0 0 14px ${props => props.theme['accent-glow']};
    pointer-events: none;
    animation: ${padPulse} 2.6s ease-in-out infinite;
  }

  /* Hologram projection rising from the palm to the cloud */
  .beam {
    position: absolute;
    left: 81.5%;
    top: 20%;
    width: 42%;
    height: 49.5%;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0, 62% 100%, 38% 100%);
    background: linear-gradient(to top, rgba(76, 194, 233, 0.4), rgba(47, 59, 255, 0.04));
    pointer-events: none;
    animation: ${beamFlicker} 3s ease-in-out infinite;
  }

  .cloud {
    position: absolute;
    left: 81.5%;
    bottom: 34%;
    width: 56%;
    transform: translateX(-50%);

    > div {
      border: 0;
    }

    canvas {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 860px) {
    .layout {
      grid-template-columns: 1fr;
    }

  }

  @media (max-width: 480px) {
    .panel {
      padding: 1.25rem;
    }

    .rows li {
      grid-template-columns: 1.4rem 1fr auto;
      row-gap: 0.45rem;
    }

    .bar {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .scale {
      margin: 0.7rem 0 0;
    }
  }
`
