import styled from "styled-components";

import { displayFont } from "@/styles/futuristic";

export const ProjectsContainer = styled.section`
  margin: 6rem 0 4rem;
  padding: 0 1rem;

  .project {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
      background: rgba(18, 18, 30, 0.75);
      backdrop-filter: blur(12px);
      transition: transform 0.4s ease;

      img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        object-position: center;
        filter: saturate(0.85);
        transition: filter 0.4s ease;
      }

      .info {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.5rem;
        padding: 0.9rem;
      }

      .index {
        ${displayFont}
        font-size: 0.6rem;
        letter-spacing: 0.2em;
        color: ${props => props.theme['accent-glow']};
      }

      strong {
        ${displayFont}
        flex: 1;
        font-size: 0.65rem;
        line-height: 1.6;
        letter-spacing: 0.1em;
        color: #fff;
      }

      .links {
        display: flex;
        gap: 0.75rem;
        padding-top: 0.6rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);

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
    }

    .card:hover {
      transform: translateY(-4px);

      img {
        filter: saturate(1.1);
      }
    }
  }

  @media (max-width: 870px) {
    .project {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    .project {
      grid-template-columns: 1fr;
    }
  }
`
