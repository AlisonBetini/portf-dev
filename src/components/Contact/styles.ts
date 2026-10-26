import styled from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";

export const ContactContainer = styled.section`
  margin-top: 6rem;
  padding: 0 1rem;

  .video {
    ${glassPanel}
    max-width: 640px;
    margin: 0 auto 6rem;
    padding: 2.25rem 0.75rem 0.75rem;

    .label {
      ${displayFont}
      position: absolute;
      top: 0.8rem;
      left: 1rem;
      font-size: 0.6rem;
      letter-spacing: 0.3em;
      color: ${props => props.theme['accent-glow']};
    }

    iframe {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }

  .contact {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;

    .card {
      ${glassPanel}
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding: 1.75rem 1.5rem;
      text-decoration: none;
      color: ${props => props.theme['gray-100']};
    }

    .index {
      ${displayFont}
      position: absolute;
      top: 1rem;
      right: 1.25rem;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: ${props => props.theme['gray-300']};
    }

    .icon {
      color: var(--brand);
      margin-bottom: 0.75rem;
      transition: filter 0.4s ease;
    }

    strong {
      ${displayFont}
      font-size: 0.85rem;
      letter-spacing: 0.15em;
    }

    .handle {
      font-size: 0.8rem;
      color: ${props => props.theme['gray-300']};
    }

    .cta {
      ${displayFont}
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 1rem;
      padding-top: 0.9rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: ${props => props.theme['accent-glow']};
    }

    .card:hover .icon {
      filter: drop-shadow(0 0 10px var(--brand));
    }
  }

  @media (max-width: 700px) {
    .contact {
      grid-template-columns: 1fr;
    }
  }
`
