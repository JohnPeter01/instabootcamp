import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/Utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';
/*
    Essa é tanto uma prefencia quanto uma boa pratica, separar as tags
    de estilos em um arquivo separado.Em uma pasta styles criar um arquivo
     com o nome da tag criada.
*/
export const MenuLogadoWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right:  28px;

  ${breakpointsMedia({
    md: css`
      justify-content:flex-start;
      margin-top:32px;
      margin-left:auto;
      margin-right:auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width:1160px;
    `,
    xl: css`
      max-width:1222px;
    `,
  })}
`;

MenuLogadoWrapper.LeftSide = styled.div`
  padding:0;
  margin:0;
  order:1;

  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
      order:initial;
      padding-right:16px;
    `,
  })}
`;

MenuLogadoWrapper.CentralSide = styled.div`
    padding:0;
    margin:0;
    order:3;
    width:100%;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 17px;
    border-top: 1px solid #88989E;
    border-bottom: 1px solid #88989E;
    padding:12px;

    ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex:1;
      order:initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom:0;
    `,
  })}

    a{
      text-align: center;
      display: block;
      text-decoration: none;
      color: #88989E;
      transition: 200ms ease-in-out;
      ${breakpointsMedia({
    xs: css`
          ${TextStyleVariants.smallestException}
        `,
    md: css`
          ${TextStyleVariants.paragrapth1}
        `,
  })}
      &:hover,
      &:focus{
        font-weight: 500;
        color: #070C0E;
      }
    }
`;
MenuLogadoWrapper.RightSide = styled.div`
    padding:0;
    margin:0;
    order:2;
    display:flex;
    flex: 1;
    justify-content: flex-end;
    ${breakpointsMedia({
    md: css`
          order:initial
        `,
  })}
    
`;