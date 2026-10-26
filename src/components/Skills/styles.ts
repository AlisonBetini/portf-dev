import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

export const SkilsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3rem;
  padding: 2rem 0;
  overflow: hidden;
  /* Edges dissolve into the page so the strip reads as part of the background */
  -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);

  /* Thin HUD rails above and below */
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(76, 194, 233, 0.35), transparent);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  .row {
    display: flex;
  }

  .track {
    display: flex;
    flex-shrink: 0;
    gap: 3rem;
    padding-right: 3rem;
    list-style: none;
    animation: ${marquee} 45s linear infinite;
  }

  .row.reverse .track {
    animation-direction: reverse;
    animation-duration: 55s;
  }

  &:hover .track {
    animation-play-state: paused;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    white-space: nowrap;
    color: rgba(225, 225, 230, 0.45);
    transition: color 0.3s ease;

    .icon {
      width: 1.6rem;
      height: 1.6rem;
      transition: color 0.3s ease, filter 0.3s ease;
    }

    span {
      font-family: "Michroma", sans-serif;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }

  li:hover {
    color: #fff;

    .icon {
      color: var(--brand);
      filter: drop-shadow(0 0 8px var(--brand));
    }
  }
`
