/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';
import { propToStyle } from '../../../theme/Utils/propToStyle';
import Link from '../Link';

/*
    Temos aqui um modelo dinamico tanto da
    flexibilização da propriedade ghost (Fundo Transparente),
    quanto da cor utilizada, deixando mais componentizado cada propriedade,
    ou seja podendo,combinar de forma mais dinamica cor e fundo.
*/

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.modes.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.modes.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.modes.${variant}.color`)};
`;

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    /*
        As propriedades abaixo elas são retiradas do objeto contifo /src/theme
        Essa variavel é provida de forma global no _app.js
    */

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

    /*
        Esse if é aplicado a cada botão asplicando de forma dinamica a propriedade ghost 
        juntamente com a corpassada no objeto.
    */

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

&:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export function Button({ href, children, ...props }) {
  const hasHerf = Boolean(href);
  const tag = hasHerf ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
