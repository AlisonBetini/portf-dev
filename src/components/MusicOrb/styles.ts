import styled from "styled-components";

export const MusicOrbContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  text-align: center;

  .kicker {
    font-family: "Michroma", sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${props => props.theme['accent-glow']};

    .index {
      margin-right: 0.5rem;
      color: ${props => props.theme['gray-300']};
    }
  }

  h2 {
    margin-top: 0.75rem;
    font-family: "Michroma", sans-serif;
    font-size: clamp(1.25rem, 4vw, 2rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .stage {
    position: relative;
    width: 100%;
    height: 560px;

    @media (max-width: 768px) {
      height: 420px;
    }
  }

  .player {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    pointer-events: none;

    .controls {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
      pointer-events: auto;

      @media (max-width: 520px) {
        flex-direction: column;
        gap: 0.75rem;
      }
    }

    .play {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: rgba(7, 7, 13, 0.4);
      backdrop-filter: blur(6px);
      color: #fff;
      cursor: pointer;
      pointer-events: auto;
      transition: box-shadow 0.3s, border-color 0.3s;
    }

    .play:hover {
      border-color: ${props => props.theme['accent-glow']};
      box-shadow: 0 0 24px ${props => props.theme['accent-glow']};
    }

    /* Glass capsule with corner brackets, matching the rest of the HUD */
    .volume {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      height: 40px;
      padding: 0 0.9rem;
      background: rgba(7, 7, 13, 0.45);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.12);

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
      }

      &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid ${props => props.theme['accent-glow']};
        border-left: 2px solid ${props => props.theme['accent-glow']};
      }

      &::after {
        right: -1px;
        bottom: -1px;
        border-right: 2px solid ${props => props.theme['accent-glow']};
        border-bottom: 2px solid ${props => props.theme['accent-glow']};
      }
    }

    .mute {
      display: flex;
      padding: 0;
      border: none;
      background: none;
      color: ${props => props.theme['accent-glow']};
      cursor: pointer;
      transition: filter 0.3s;
    }

    .mute:hover {
      filter: drop-shadow(0 0 6px ${props => props.theme['accent-glow']});
    }

    input[type='range'] {
      width: 96px;
      height: 3px;
      margin: 0;
      appearance: none;
      background: linear-gradient(
        to right,
        ${props => props.theme['accent']},
        ${props => props.theme['accent-glow']} var(--fill),
        rgba(255, 255, 255, 0.15) var(--fill)
      );
      cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      width: 10px;
      height: 16px;
      background: #fff;
      box-shadow: 0 0 10px ${props => props.theme['accent-glow']};
    }

    input[type='range']::-moz-range-thumb {
      width: 10px;
      height: 16px;
      border: none;
      border-radius: 0;
      background: #fff;
      box-shadow: 0 0 10px ${props => props.theme['accent-glow']};
    }

    .value {
      min-width: 1.5rem;
      font-family: "Michroma", sans-serif;
      font-size: 0.55rem;
      letter-spacing: 0.1em;
      color: ${props => props.theme['gray-300']};
    }

    strong {
      font-family: "Michroma", sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    span {
      font-size: 0.75rem;
      color: ${props => props.theme['gray-300']};
    }
  }
`
