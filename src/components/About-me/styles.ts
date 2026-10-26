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
    p {
      color: ${props => props.theme['gray-300']};
      margin: 0 0 1.25rem;
      line-height: 1.7;
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

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .about {
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 425px) {
    .skills {
      justify-content: center;
      gap: 3rem;
      padding-left: 4rem;
      margin-bottom: 2rem;

      .separator {
        margin-right: 0rem;
      }
    }
  }

  @media (max-width: 375px) {
    .skills {
      justify-content: center;
      gap: 1.7rem;
      padding-left: 4rem;
      margin-bottom: 2rem;
    }
  }
`