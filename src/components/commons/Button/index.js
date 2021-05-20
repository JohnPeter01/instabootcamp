/* eslint-disable linebreak-style */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Link from '../Link';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';
import { propToStyle } from '../../../theme/Utils/propToStyle';

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
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

  // Confere qual é o tipo de botão para estilizar adequadamente
  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }};

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    opacity: .2;
    cursor: not-allowed;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: null,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
