import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/Utils/propToStyle';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

function TextStyle(variant) {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variant].fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants[variant].fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants[variant].lineHeight};
  `;
}

export const TextStyleVariants = {
  title: breakpointsMedia({
    xs: TextStyle('titleXS'),
    md: TextStyle('title'),
  }),
  subTitle: TextStyle('subTitle'),
  paragraph1: TextStyle('paragraph1'),
  paragraph2: TextStyle('paragraph2'),
  paragraph1bold: TextStyle('paragraph1bold'),
  paragraph2bold: TextStyle('paragraph2bold'),
  smallestException: TextStyle('smallestException'),
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export function Text({
  variant,
  children,
  tag,
  href,
  cmsKey,
  ...props
}) {
  const websitePageContext = React.useContext(WebsitePageContext);
  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  return (
    <TextBase
      as={href ? Link : tag}
      variant={variant}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {componentContent}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: null,
  cmsKey: '',
};

/* Validação dos tipos de entrada dos atributos */
Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};
