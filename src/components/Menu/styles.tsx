import styled from "styled-components";

export const NavLink = styled.nav`
  nav, ul, li { 
    list-style: none;

    a:hover {
      color: #C4C4CC;
    }
  }

  a {
    display: block;
    margin-top: 2rem;
    position: relative;
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

`