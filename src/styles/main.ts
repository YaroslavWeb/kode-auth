import { css } from "styled-components";
import theme from "./theme";

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  button {
    font-family: inherit;
  }

  a {
    color: ${theme.colors.primary};
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;
