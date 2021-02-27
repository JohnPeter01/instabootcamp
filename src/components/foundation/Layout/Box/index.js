import styled from 'styled-components';
import { propToStyle } from '../../../../theme/Utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
`;
