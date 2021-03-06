import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Passion+One&display=swap');
    
    /* General */
    * { 
        font-family: ${(props) => props.theme.fontPrimary}, sans-serif;
        font-size: ${(props) => props.theme.baseSize};
    }

    h1, h2, h3, h4 { font-family: ${(props) =>
      props.theme.fontSecondary}, cursive; }

    h1 { font-size: ${(props) => props.theme.baseSize ^ 6}em; }

    h2 { font-size: ${(props) => props.theme.baseSize ^ 5}em; }

    h3 { font-size: ${(props) => props.theme.baseSize ^ 4}em; }

    h4 { font-size: ${(props) => props.theme.baseSize ^ 3}em; }
    
    /* Helpers */
    .h-100vh { height: 100vh; }
    .z-index-0 { z-index: 0; }
    .z-index-1 { z-index: 1; }

    /* Components style */
    .bg-color { background-color:  ${(props) => props.theme.backgroundColor}; }

    .btn {
      background-color:  ${(props) => props.theme.primaryColor};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: block;
      padding: 8px 16px;
      font-size: 1em;
    }
`;

GlobalStyle.defaultProps = {
  theme: {
    baseSize: 1,
    fontPrimary: "Montserrat",
    fontSecondary: "Passion One",
    primaryColor: "#54BAB9",
    secondaryColor: "#E9DAC1",
    backgroundColor: "#F7ECDE",
    textColor: "grey"
  },
};

export default GlobalStyle;
