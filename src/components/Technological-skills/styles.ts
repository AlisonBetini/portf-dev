import styled from "styled-components";

import { glassPanel } from "@/styles/futuristic";

export const TechnologicalSkillsContainer = styled.section`
  margin-top: 6rem;
  padding: 0 1rem;

  .charts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    > div {
      ${glassPanel}
    }

    /* shadcn Card inside each chart: let the glass panel show through */
    > div > div {
      background: transparent;
      border: none;
      box-shadow: none;
    }

    tspan:first-child {
      font-family: "Michroma", sans-serif;
      font-weight: 400;
      font-size: 15px;
      fill: #fff;
    }
  }

  .cloud {
    margin-top: 3rem;
  }

  @media (max-width: 900px) {
    .charts {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .charts {
      grid-template-columns: 1fr;
    }
  }
`
