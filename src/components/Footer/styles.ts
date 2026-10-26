import styled from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 1rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .kicker {
    ${displayFont}
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    color: ${props => props.theme['accent-glow']};
  }

  .institutions {
    display: flex;
    gap: 1rem;
  }

  .card {
    ${glassPanel}
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    color: ${props => props.theme['gray-100']};

    img {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      object-fit: cover;
    }

    span {
      ${displayFont}
      font-size: 0.65rem;
      letter-spacing: 0.15em;
    }
  }

  .copy {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: ${props => props.theme['gray-300']};
  }
`
