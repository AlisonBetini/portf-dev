import styled, { keyframes } from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";

const gear = keyframes`
  from {
    transform: rotate(360deg);
  }
`

const pincel = keyframes`
  0% {
    transform: translateY(4px);
  }

  50% {
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(4px);
  }
`

const arrowLeft = keyframes`
    0% {
    transform: translateX(2px);
  }

  50% {
    transform: translateX(-2px);
  }

  100% {
    transform: translateX(2px);
  }
`

const arrowRight = keyframes`
  0% {
    transform: translateX(-2px);
  }

  50% {
    transform: translateX(2px);
  }

  100% {
    transform: translateX(-2px);
  }
`

const lineAnimation = keyframes`
  from {  
    transform: translateY(-50%);
    overflow: hidden;
  }

  to {
    transform: translateY(0);
  }
`

const typing = keyframes`
  from {
    width: 0;
  }
` 

const cursor = keyframes`
  50% {
    border-color: transparent;
  }  
`

export const AboutMeContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 6rem;
  padding: 0px 2rem 0px 2rem;
  margin-bottom: 4rem;

  .skills {
    display: flex;
    justify-content: space-between;

    .separator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
      margin-right: 3rem;
    }
    
    .line-1, .line-2, .line3 {
      animation: ${lineAnimation} 1.5s linear ;
      border: 1px solid ${props => props.theme['accent']};
      height: 4rem;
      width: 2px;
    }

    span {
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${props => props.theme['accent']};
    }

    .hard-skills {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
    }

    .content {
      ${glassPanel}
      display: flex;
      align-items: center;
      gap: 1.5rem;
      min-width: 20rem;
      padding: 1.25rem 1.5rem;

      strong {
        ${displayFont}
        font-size: 0.7rem;
        letter-spacing: 0.15em;
        color: ${props => props.theme['gray-100']};
      }

      .separatorArrow {
        display: flex;
        align-items: center;
        margin-left: -15px;
        margin-right: -15px;
      }

      .gear {
        animation: ${gear} 15s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['accent-glow']};
      }

      .pincel {
        animation: ${pincel} 5s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['accent-glow']};
      }

      .arrowLeft {
        animation: ${arrowLeft} 5s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['accent']};
      }

      .arrowRight {
        animation: ${arrowRight} 5s linear infinite;
        cursor: pointer;
        color: ${props => props.theme['accent']};
    }
  }
  }

  .about {
    min-width: 0;

    p {
      color: ${props => props.theme['gray-300']};
      margin: 0 0 1.25rem;
      line-height: 1.7;
    }

    .solves-title {
      ${displayFont}
      margin: 1.75rem 0 1rem;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: ${props => props.theme['accent-glow']};
    }

    .solves {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      margin-bottom: 1.75rem;
      list-style: none;

      li {
        ${glassPanel}
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        padding: 1rem;
      }

      strong {
        font-size: 0.95rem;
        font-weight: 600;
        line-height: 1.35;
        color: #fff;
      }

      p {
        flex: 1;
        margin: 0;
        font-size: 0.85rem;
        line-height: 1.5;
      }

      span {
        ${displayFont}
        font-size: 0.5rem;
        letter-spacing: 0.15em;
        color: ${props => props.theme['hextech-gold']};
      }

      @media (max-width: 560px) {
        grid-template-columns: 1fr;
      }
    }

    .separator-card {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 2rem;

      .card {
        ${glassPanel}
        display: flex;
        flex-direction: column;
        gap: 0.70rem;
        padding: 1.25rem;

        strong {
          ${displayFont}
          position: relative;
          font-size: 1.6rem;
          color: ${props => props.theme['gray-100']};
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          animation: ${typing} 1s steps(15), 
          ${cursor} 1s step-end infinite ;
        }
        

        strong::after {
          content: '+';
          position: absolute;
          margin-left: 8px;
          color: ${props => props.theme['accent']};
        }

        span {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${props => props.theme['gray-300']};
        }
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .about {
      width: 100%;
      margin-bottom: 5rem;
    }
  }

  /* Three number cards do not fit side by side: stack them, number on the left */
  @media (max-width: 520px) {
    padding: 0 1rem;

    .about .separator-card {
      grid-template-columns: 1fr;
      gap: 0.6rem;

      .card {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.9rem 1.1rem;

        strong {
          width: auto;
          padding-right: 1.4rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .skills {
      justify-content: center;
      gap: 1rem;
      width: 100%;
      margin-bottom: 2rem;

      .separator {
        margin-right: 0rem;
      }

      .hard-skills {
        flex: 1;
        min-width: 0;
      }

      .content {
        min-width: 0;
        gap: 1rem;
        padding: 1rem;
      }
    }
  }
`