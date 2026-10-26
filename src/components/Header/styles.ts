import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;

  h2 {
    font-family: "Michroma", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .menu {
    display: none;
  }

  @media (max-width: 767px) {
    .menu {
      display: block;
    }
  }
`

export const NavLinkHeader = styled.nav`
  nav, ul, li { 
    display: flex;
    gap: 2rem;
    list-style: none;

    a:hover {
      color: #C4C4CC;
    }
  }

  a {
    position: relative;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${props => props.theme['gray-100']};
    text-decoration: none;
    padding-bottom: 4px;
    padding-top: 4px;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme['accent-glow']};
    transform: scale(0);
    transition: transform 0.3s;
  }

  a:hover::after {
    transform: scale(1);
  }  

  @media (max-width: 767px) {
    display: none;
  }
`