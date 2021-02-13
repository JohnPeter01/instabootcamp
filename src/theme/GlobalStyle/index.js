import { createGlobalStyle,  } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
/*
    Com essa estrtutura estamos trazendo todo o padrão de
    normalização do Styled-compoents de uma só vez apenas 
    trazendo a lib responsavel por isso.

    Essa normalização e realizada entre navegadores 
*/
  ${normalize}
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
