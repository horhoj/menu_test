import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: DevCoder, monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: cadetblue;
    border: 1px solid red;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;
