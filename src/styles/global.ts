import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.medium_black};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;

    outline: none;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  input {
    color: ${({ theme }) => theme.light_black};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.light_black};
    border-radius: 10px;
  }
`;
