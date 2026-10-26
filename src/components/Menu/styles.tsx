import styled, { keyframes } from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const MenuPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100%;
  padding: 3.5rem 1.5rem 2rem;
  overflow: hidden;
  background: rgba(7, 7, 13, 0.92);
  backdrop-filter: blur(16px);
  border-left: 1px solid rgba(76, 194, 233, 0.25);
  color: ${props => props.theme['gray-100']};

  /* Neon edge glowing along the panel's left border */
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 15%;
    width: 2px;
    height: 30%;
    background: ${props => props.theme['accent-glow']};
    box-shadow: 0 0 16px ${props => props.theme['accent-glow']};
  }

  .grid-lines {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 33.3% 100%;
  }

  header {
    position: relative;
  }

  .kicker {
    ${displayFont}
    position: relative;
    display: inline-block;
    padding-left: 0.4rem;
    font-size: 0.6rem;
    letter-spacing: 0.25em;
  }

  .kicker::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -0.4rem;
    top: -0.45rem;
    width: 1.8rem;
    height: 4.6rem;
    background: ${props => props.theme['accent']};
    box-shadow: 0 0 30px ${props => props.theme['accent']};
  }

  h2 {
    ${displayFont}
    margin: 0.4rem 0 0.3rem;
    font-size: 2.6rem;
    letter-spacing: 0.08em;
    color: #fff;
    text-shadow: 0 0 24px rgba(76, 194, 233, 0.35);
  }

  header p {
    ${displayFont}
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    color: ${props => props.theme['accent-glow']};
  }

  nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  nav li {
    opacity: 0;
    animation: ${slideIn} 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  nav a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0.25rem;
    text-decoration: none;
    color: ${props => props.theme['gray-100']};
    transition: color 0.3s, padding 0.3s;
  }

  nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: ${props => props.theme['accent-glow']};
    box-shadow: 0 0 8px ${props => props.theme['accent-glow']};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  .index {
    ${displayFont}
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    color: ${props => props.theme['accent-glow']};
  }

  .label {
    ${displayFont}
    flex: 1;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
  }

  .arrow {
    opacity: 0.4;
    transition: opacity 0.3s, transform 0.3s;
  }

  nav a:hover,
  nav a:focus-visible {
    color: #fff;
    padding-left: 0.75rem;

    &::after {
      transform: scaleX(1);
    }

    .arrow {
      opacity: 1;
      transform: translate(2px, -2px);
      color: ${props => props.theme['accent-glow']};
    }
  }

  .panels {
    display: grid;
    gap: 0.75rem;

    div {
      ${glassPanel}
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding: 1rem 1.1rem;
    }

    strong {
      ${displayFont}
      font-size: 0.6rem;
      letter-spacing: 0.15em;
      color: #fff;
    }

    span {
      font-size: 0.75rem;
      line-height: 1.5;
      color: ${props => props.theme['gray-300']};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }

  .socials {
    display: flex;
    gap: 1.1rem;
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

  .copy {
    ${displayFont}
    font-size: 0.5rem;
    letter-spacing: 0.2em;
    color: ${props => props.theme['gray-300']};
  }
`
