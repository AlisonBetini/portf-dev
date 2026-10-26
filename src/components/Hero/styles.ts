import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
`

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  45% { opacity: 0.85; }
  48% { opacity: 0.4; }
  50% { opacity: 1; }
`

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 0 transparent) brightness(1); }
  50% { filter: drop-shadow(0 0 24px rgba(255, 77, 46, 0.25)) brightness(1.08); }
`

export const HeroContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 1240px;
  min-height: calc(100vh - 7rem);
  margin: 0 auto;
  padding: 0 4rem 0 2rem;

  .grid-lines {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-evenly;
    pointer-events: none;

    span {
      width: 1px;
      height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.06), transparent);
    }
  }

  .intro {
    position: relative;
    z-index: 1;
    animation: ${reveal} 1s ease-out both;
  }

  .kicker {
    position: relative;
    display: inline-block;
    font-family: "Michroma", sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${props => props.theme['gray-100']};
    padding-left: 0.5rem;
  }

  .kicker::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -0.5rem;
    top: -0.6rem;
    width: 2.6rem;
    height: 6.5rem;
    background-color: ${props => props.theme['accent']};
    box-shadow: 0 0 40px ${props => props.theme['accent']};
  }

  h1 {
    font-family: "Michroma", sans-serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #fff;
    margin: 0.5rem 0 0.5rem;
    text-shadow: 0 0 30px rgba(76, 194, 233, 0.35);
    animation: ${flicker} 4s linear 1s 1;
  }

  h2 {
    font-family: "Michroma", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: ${props => props.theme['accent-glow']};
  }

  p {
    max-width: 26rem;
    margin: 2rem 0 2.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${props => props.theme['gray-100']};
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${props => props.theme['gray-300']};
  }

  .myResume {
    display: flex;
    gap: 1rem;
  }

  .hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-self: stretch;
  }

  .portrait {
    position: relative;
    align-self: flex-start;
    width: min(440px, 85vw);
    margin-top: -3rem;
    pointer-events: none;
  }

  /* The photo has a black backdrop: lighten blends it into the hyperspeed background. */
  .dev {
    display: block;
    width: 100%;
    mix-blend-mode: lighten;
    -webkit-mask-image: radial-gradient(ellipse 70% 75% at 50% 40%, #000 55%, transparent 100%);
    mask-image: radial-gradient(ellipse 70% 75% at 50% 40%, #000 55%, transparent 100%);
    animation: ${glow} 4s ease-in-out infinite;
  }

  .tag {
    position: absolute;
    font-family: "Michroma", sans-serif;
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${props => props.theme['gray-100']};
  }

  .tag::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 3.5rem;
    height: 1px;
    background: ${props => props.theme['gray-300']};
  }

  .tag-top {
    top: 24%;
    left: 80%;
    padding-left: 4rem;
  }

  .tag-top::before {
    left: 0;
  }

  .tag-bottom {
    top: 42%;
    right: 80%;
    padding-right: 4rem;
  }

  .tag-bottom::before {
    right: 0;
  }

  .panels {
    position: absolute;
    right: -2rem;
    bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1.5rem 2rem;
    background: rgba(18, 18, 30, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.06);

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 11rem;
    }

    strong {
      font-family: "Michroma", sans-serif;
      font-size: 0.65rem;
      font-weight: 400;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    span {
      font-size: 0.7rem;
      line-height: 1.5;
      color: ${props => props.theme['gray-300']};
    }
  }

  .socials {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    list-style: none;

    a {
      display: flex;
      color: ${props => props.theme['gray-300']};
      transition: color 0.3s, filter 0.3s;
    }

    a:hover {
      color: ${props => props.theme['accent-glow']};
      filter: drop-shadow(0 0 6px ${props => props.theme['accent-glow']});
    }
  }

  /* Not enough room on the right of the portrait: mirror the top tag to the left side */
  @media (max-width: 1360px) {
    .tag-top {
      top: 18%;
      left: auto;
      right: 80%;
      padding-left: 0;
      padding-right: 4rem;
    }

    .tag-top::before {
      left: auto;
      right: 0;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem 3.5rem 0 1.5rem;

    .hero {
      margin-top: 8rem;
    }

    .panels {
      position: relative;
      right: auto;
      bottom: auto;
      margin-top: -6rem;
    }

    .hero {
      flex-direction: column;
      align-items: center;
    }

    .portrait {
      align-self: center;
    }
  }

  @media (max-width: 520px) {
    .panels {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .tag {
      display: none;
    }
  }
`

export const Button = styled.button`
  display: inline-block;
  padding: 15px 22px;
  font-family: "Michroma", sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid ${props => props.theme['accent']};
  background-color: ${props => props.theme['accent']};
  color: #fff;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;

  &.ghost {
    background-color: transparent;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme['accent']};
    box-shadow: 0 0 24px ${props => props.theme['accent']};
  }
`
