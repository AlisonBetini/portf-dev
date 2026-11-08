import styled, { keyframes } from "styled-components";

import { displayFont, glassPanel } from "@/styles/futuristic";
import "./properties.css";

// Inspired by the League of Legends "Match Found" screen: a light burst opens the card,
// a blue arc runs around its gold frame, then the whole frame lights up and settles.
const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const imageFlash = keyframes`
  0% {
    filter: brightness(3.5) blur(10px);
    transform: scale(1.12);
  }
  100% {
    filter: brightness(1) blur(0);
    transform: scale(1);
  }
`

const burst = keyframes`
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(0.1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
`

const arcRun = keyframes`
  0% {
    --arc-sweep: 0deg;
    opacity: 1;
  }
  72% {
    --arc-sweep: 360deg;
    opacity: 1;
  }
  100% {
    --arc-sweep: 360deg;
    opacity: 0;
  }
`

const orbit = keyframes`
  to {
    --arc-angle: 360deg;
  }
`

const accepted = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 transparent;
  }
  50% {
    box-shadow: 0 0 44px rgba(76, 194, 233, 0.5);
  }
`

const buildingPulse = keyframes`
  50% {
    opacity: 0.35;
  }
`

export const ProjectsContainer = styled.section`
  position: relative;
  max-width: 1240px;
  margin: 6rem auto 4rem;
  padding: 0 1.5rem;
`

export const ProjectGroup = styled.div`
  margin-top: 3rem;

  h3 {
    ${displayFont}
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    color: ${props => props.theme['hextech-gold']};
  }

  h3::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(200, 170, 110, 0.4), transparent);
  }

  .cards {
    display: grid;
    gap: 1.75rem;
  }

  .two {
    grid-template-columns: repeat(2, 1fr);
  }

  .three {
    grid-template-columns: repeat(3, 1fr);
  }

  .four {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: rgba(9, 14, 30, 0.82);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(200, 170, 110, 0.35);
    transition: transform 0.4s ease, border-color 0.4s ease;
  }

  /* Thin outer ring of the "Match Found" frame */
  .project-card::before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 1px solid rgba(200, 170, 110, 0.14);
    pointer-events: none;
    transition: inset 0.4s ease, border-color 0.4s ease;
  }

  .project-card.pending {
    opacity: 0;
  }

  .project-card.revealed {
    animation:
      ${cardIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) var(--delay) backwards,
      ${accepted} 0.9s ease calc(var(--delay) + 1.1s);
  }

  .project-card:hover {
    transform: translateY(-6px);
    border-color: rgba(200, 170, 110, 0.7);
  }

  .project-card:hover::before {
    inset: -10px;
    border-color: rgba(200, 170, 110, 0.4);
  }

  /* Glow lives on the wrapper because a filter on the masked element would be cut by its own mask */
  .frame {
    position: absolute;
    inset: -1px;
    z-index: 2;
    pointer-events: none;
    filter: drop-shadow(0 0 7px ${props => props.theme['accent-glow']});
  }

  .arc,
  .orbit {
    position: absolute;
    inset: 0;
    padding: 2px;
    opacity: 0;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  }

  .arc {
    background: conic-gradient(
      from 315deg,
      ${props => props.theme['accent']} 0deg,
      ${props => props.theme['accent-glow']} calc(var(--arc-sweep) - 12deg),
      #fff var(--arc-sweep),
      transparent var(--arc-sweep)
    );
  }

  .revealed .arc {
    animation: ${arcRun} 1.5s cubic-bezier(0.45, 0, 0.3, 1) calc(var(--delay) + 0.15s) both;
  }

  .orbit {
    background: conic-gradient(
      from var(--arc-angle),
      transparent 0deg 250deg,
      ${props => props.theme['accent']} 300deg,
      ${props => props.theme['accent-glow']} 350deg,
      #fff 360deg
    );
    transition: opacity 0.3s ease;
  }

  .project-card:hover .orbit {
    opacity: 1;
    animation: ${orbit} 2.2s linear infinite;
  }

  .media {
    position: relative;
    aspect-ratio: 16 / 8.5;
    overflow: hidden;
    border-bottom: 1px solid rgba(200, 170, 110, 0.25);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: transform 0.6s ease;
    }
  }

  .revealed .media img {
    animation: ${imageFlash} 0.9s ease-out calc(var(--delay) + 0.1s) backwards;
  }

  .project-card:hover .media img {
    transform: scale(1.04);
  }

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 4.5rem;
    color: ${props => props.theme['accent-glow']};
    background:
      radial-gradient(circle at center, rgba(47, 59, 255, 0.35), transparent 65%),
      linear-gradient(rgba(76, 194, 233, 0.08) 1px, transparent 1px) 0 0 / 100% 28px,
      linear-gradient(90deg, rgba(76, 194, 233, 0.08) 1px, transparent 1px) 0 0 / 28px 100%;
  }

  .placeholder svg {
    filter: drop-shadow(0 0 16px ${props => props.theme['accent-glow']});
  }

  /* Ring of light that expands when the card opens */
  .burst {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 130%;
    aspect-ratio: 1;
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 40px ${props => props.theme['accent-glow']}, inset 0 0 40px ${props => props.theme['accent-glow']};
    opacity: 0;
    pointer-events: none;
  }

  .revealed .burst {
    animation: ${burst} 0.9s ease-out calc(var(--delay) + 0.1s);
  }

  .status {
    ${displayFont}
    display: flex;
    align-self: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 0.75rem;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    color: #fff;
    background: rgba(5, 8, 20, 0.85);
    border: 1px solid rgba(200, 170, 110, 0.5);
  }

  .status::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  .status.live::before {
    background: #3DDC97;
    box-shadow: 0 0 8px #3DDC97;
  }

  .status.building::before {
    background: ${props => props.theme['hextech-gold']};
    animation: ${buildingPulse} 1.2s ease-in-out infinite;
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }

  /* Chamfered crest, like the emblem in the center of the reference screen */
  .crest {
    ${displayFont}
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    height: 2.3rem;
    font-size: 0.6rem;
    color: #fff;
    background: linear-gradient(135deg, ${props => props.theme['accent']}, #101499);
    clip-path: polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%);
  }

  h4 {
    ${displayFont}
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.06em;
    color: #fff;
  }

  .content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${props => props.theme['gray-300']};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    list-style: none;

    li {
      padding: 0.25rem 0.6rem;
      font-size: 0.72rem;
      color: ${props => props.theme['accent-glow']};
      background: rgba(76, 194, 233, 0.08);
      border: 1px solid rgba(76, 194, 233, 0.22);
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: auto;
    padding-left: 0.8rem;
    border-left: 2px solid ${props => props.theme['hextech-gold']};

    span {
      ${displayFont}
      font-size: 0.5rem;
      letter-spacing: 0.2em;
      color: ${props => props.theme['hextech-gold']};
    }

    strong {
      font-size: 0.9rem;
      font-weight: 600;
      color: #fff;
    }
  }

  /* Evidence that the client exists: gold-edged strip, set apart from the project details */
  .business {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 0.8rem;
    background: rgba(200, 170, 110, 0.07);
    border: 1px solid rgba(200, 170, 110, 0.3);

    img {
      flex-shrink: 0;
      width: 4.5rem;
      height: 4.5rem;
      object-fit: cover;
      border: 1px solid rgba(200, 170, 110, 0.4);
    }

    img.contain {
      object-fit: contain;
      background: #0a0a0f;
    }
  }

  .business-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;

    strong {
      font-size: 0.9rem;
      font-weight: 600;
      color: #fff;
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      overflow-wrap: anywhere;
      font-size: 0.78rem;
      text-decoration: none;
      color: ${props => props.theme['accent-glow']};
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .business-label {
    ${displayFont}
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: ${props => props.theme['hextech-gold']};

    svg {
      font-size: 0.85rem;
    }
  }

  .business-detail {
    font-size: 0.78rem;
    line-height: 1.4;
    color: ${props => props.theme['gray-300']};
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }

  /* Trapezoid button from the "Accept!" control: gold edge with a blue core */
  .accept {
    ${displayFont}
    position: relative;
    display: inline-flex;
    flex: 1;
    min-width: 9.5rem;
    padding: 1px;
    text-decoration: none;
    background: ${props => props.theme['hextech-gold']};
    clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 12px 100%);
    transition: filter 0.3s ease;

    > span {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.8rem 1.2rem;
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      color: #fff;
      background: linear-gradient(to bottom, #123a78, #0a1c46);
      clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 12px 100%);
      transition: background 0.3s ease;
    }
  }

  a.accept:hover {
    filter: brightness(1.2) drop-shadow(0 0 10px ${props => props.theme['accent-glow']});

    > span {
      background: linear-gradient(to bottom, ${props => props.theme['accent-glow']}, ${props => props.theme['accent']});
    }
  }

  /* Small rectangular secondary action, like "Decline" */
  .decline {
    ${displayFont}
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.75rem 0.9rem;
    font-size: 0.55rem;
    letter-spacing: 0.12em;
    text-decoration: none;
    color: ${props => props.theme['hextech-gold']};
    background: rgba(5, 8, 20, 0.7);
    border: 1px solid rgba(200, 170, 110, 0.55);
    transition: color 0.3s ease, border-color 0.3s ease;
  }

  a.decline:hover {
    color: #fff;
    border-color: ${props => props.theme['hextech-gold']};
  }

  .accept.off {
    opacity: 0.55;
  }

  .decline.off {
    opacity: 0.6;
  }

  .study-card {
    ${glassPanel}
    display: flex;
    flex-direction: column;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      object-position: top;
      opacity: 0.85;
      transition: opacity 0.3s ease;
    }

    &:hover img {
      opacity: 1;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.7rem 0.8rem;
    }

    strong {
      ${displayFont}
      font-size: 0.55rem;
      line-height: 1.5;
      letter-spacing: 0.08em;
      color: #fff;
    }

    .links {
      display: flex;
      flex-shrink: 0;
      gap: 0.6rem;
      font-size: 0.95rem;
    }

    a {
      display: flex;
      color: ${props => props.theme['gray-300']};
      transition: color 0.3s ease;
    }

    a:hover {
      color: ${props => props.theme['accent-glow']};
    }
  }

  @media (max-width: 1000px) {
    .three {
      grid-template-columns: repeat(2, 1fr);
    }

    .four {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 720px) {
    .two,
    .three {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 400px) {
    .four {
      grid-template-columns: 1fr;
    }
  }
`
