import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
    outline: 0;
 }

 body {
    background-color: ${props => props.theme['background']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
 }

 html {
   scroll-behavior: smooth;
 }

 body, button, input, textarea {
   font-family: "Inter", sans-serif;
   font-size: 1rem;
   font-weight: 400;

   @media (max-width: 768px) {
      font-size: 0.75rem;
   }
 }

 ::-webkit-scrollbar {
   width: 7px;
 }
 ::-webkit-scrollbar-thumb {
   background-color: ${props => props.theme['accent']};
   border-radius: 8px;
 }
 ::-webkit-scrollbar-track {
   background: transparent;
 }
`