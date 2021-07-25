import { get } from 'lodash';
import styled from 'styled-components';

export function convertToIcon({ icon, mainColor, focusColor }) {
  return styled(icon)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, mainColor)};
  height: 39px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color:  ${({ theme }) => get(theme, focusColor)}; 
  }
`;
}
