import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Passion+One&display=swap');
    
    body { 
        font-family: ${(props) => props.theme.fontPrimary}, sans-serif;
        font-size: ${(props) => props.theme.baseSize};
    }

    h1, h2, h3, h4 { font-family: ${(props) =>
      props.theme.fontSecondary}, cursive; }

    h1 { font-size: ${(props) => props.theme.baseSize ^ 6}em; }

    h2 { font-size: ${(props) => props.theme.baseSize ^ 5}em; }

    h3 { font-size: ${(props) => props.theme.baseSize ^ 4}em; }

    h4 { font-size: ${(props) => props.theme.baseSize ^ 3}em; }
`;

GlobalStyle.defaultProps = {
  theme: {
    baseSize: 1,
    fontPrimary: "Montserrat",
    fontSecondary: "Passion One",
  },
};

export default GlobalStyle;
