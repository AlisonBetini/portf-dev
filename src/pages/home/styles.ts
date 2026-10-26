import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  /* Transparent bottom edge so the hero melts into the lightfall below instead of ending in a seam */
  background: linear-gradient(to bottom, ${props => props.theme['background']} 75%, transparent);

  /* Mask fades the road into the rest of the page without isolating the hero (photo uses blend mode). */
  .hyperspeed-bg {
    position: absolute;
    inset: 0;
    opacity: 0.55;
    -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent);
    mask-image: linear-gradient(to bottom, #000 70%, transparent);
  }
`

// Full-width wrapper so the background layers span the viewport, not the 1000px column.
export const ContentSection = styled.div`
  position: relative;

  .bg-lightfall,
  .bg-prism {
    position: absolute;
    left: 0;
    right: 0;
    pointer-events: none;
  }

  /* Light streaks falling right below the hero */
  .bg-lightfall {
    top: -240px;
    height: 1400px;
    opacity: 0.8;
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 12%, #000 65%, transparent);
    mask-image: linear-gradient(to bottom, transparent, #000 12%, #000 65%, transparent);
  }

  /* Prism glowing behind contact and footer */
  .bg-prism {
    bottom: 0;
    height: 1100px;
    opacity: 0.75;
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 35%);
    mask-image: linear-gradient(to bottom, transparent, #000 35%);
  }
`

export const HomeContainer = styled.div`
  max-width: 1000px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`
