import { css } from "styled-components";

// Shared look for the futuristic sections: glass panel with neon corner brackets.
export const glassPanel = css`
  position: relative;
  background: rgba(18, 18, 30, 0.55);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    pointer-events: none;
    transition: width 0.4s ease, height 0.4s ease;
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

  &:hover {
    border-color: rgba(76, 194, 233, 0.35);
    box-shadow: 0 0 28px rgba(47, 59, 255, 0.35);
  }

  &:hover::before,
  &:hover::after {
    width: 28px;
    height: 28px;
  }
`

export const displayFont = css`
  font-family: "Michroma", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
`
