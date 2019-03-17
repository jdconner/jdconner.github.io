import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #000120;
    --color-secondary: #0275d8;
    --color-link: #0275d8;
    --color-text: #778899;
    --color-text-large: #f9f9f9;
    --color-text-medium: #b7c4d1;
    --color-text-small: var(--color-text);
    --font-family: 'Helvetica Neue', system-ui, Helvetica, Arial, sans-serif;
  }

  body {
      margin: 0;
      background-color: var(--color-primary);
      color: var(--color-text);
      font-size: 1pc;
      font-family: var(--font-family);
      margin: 0 auto;
      -webkit-font-smoothing: antialiased;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0 0 .35em;
    font-weight: 500;
  }

  p {
    font-weight: 500;
    color: var(--color-text-small);
  }

  h1,
  h2 {
    color: var(--color-text-large);
  }

  h3,
  h4,
  h6 {
    color: var(--color-text-medium);
  }

  h5 {
    color: var(--color-text-large);
  }

  .fs20 {
    font-size: 20px;
  }
`;
