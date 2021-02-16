import React from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

export const TextStyledVariant = {
    paragrapth1: css`
    font-size: ${({theme}) => theme.typographyVariants.paragrapth1.fontSize};
    font-weight:${({theme}) => theme.typographyVariants.paragrapth1.fontWeight};
    line-height:${({theme}) => theme.typographyVariants.paragrapth1.lineWeight};
`,

smallestException: css`
    font-size: ${({theme}) => theme.typographyVariants.smallestException.fontSize};
    font-weight:${({theme}) => theme.typographyVariants.smallestException.fontWeight};
    line-height:${({theme}) => theme.typographyVariants.smallestException.lineWeight};
`,
}

const TextBase = styled.span`
    ${(props) => TextStyledVariant[props.variant]}
`;

export default function Text({tag, variant, children}){
    return(
        <TextBase
            as={tag}
            variant = {variant}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant:'paragraph1'
}