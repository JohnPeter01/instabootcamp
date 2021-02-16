import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyledVariant } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

/*
    Temos aqui um modelo dinamico tanto da flexibilização da propriedade ghost (Fundo Transparente), 
    quanto da cor utilizada, deixando mais componentizado cada propriedade, ou seja podendo,combinar
    de forma mais dinamica cor e fundo.
*/

const ButtonGhost = css `
    //A propriedade props esta disponivel de forma globlal, ao passo que get do loadsh e uma lib importada.
    color: ${(props) => {return get(props.theme,`colors.modes.${props.variant}.color`)}};
    background: transparent;
`;

const ButtonDefault = css `
    color:${(props) => {return get(props.theme,`colors.modes.${props.variant}.contrastText`)}};
    background: ${(props) => {return get(props.theme,`colors.modes.${props.variant}.color`)}};
`


export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;

    /*
        As propriedades abaixo elas são retiradas do objeto contifo /src/theme
        Essa variavel é provida de forma global no _app.js
    */

    transition: opacity ${({theme}) => theme.transition};
    border-radius: ${({theme}) => theme.borderRadius};  

    /*
        Esse if é aplicado a cada botão asplicando de forma dinamica a propriedade ghost 
        juntamente com a corpassada no objeto.
    */

    ${({ghost}) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus{
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
      ${TextStyledVariant.smallestException}
    `,
    md: css`
     ${TextStyledVariant.paragrapth1}
    `
    })};
`;