/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NexLink from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

const StyledLink = styled.a`
color:inherit;
${({ theme, color }) => (color
    ? `color ${get(theme, `colors.${color}.color`)}`
    : 'color:inherit;')};
text-decoration:none;
opacity: 1;
transition:opacity ${({ theme }) => theme.transition};
&:hover,
&:focus {
    opacity: .5;
}
`;

export default function Link({ href, children, ...props }) {
  return (
    <NexLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NexLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
