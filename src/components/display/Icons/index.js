import styled from 'styled-components';
import get from 'lodash/get';

import { PlusCircleFill } from '@styled-icons/bootstrap/PlusCircleFill';
import { Heart } from '@styled-icons/bootstrap/Heart';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';

export const plusCircle = styled(PlusCircleFill)`
  margin: 5px 15px;
  color:  #FB7B6B;//${({ theme }) => get(theme, 'colors.light.secondary.main.color')};
  height: 30px;
  transition: 0.3s;
  box-shadow: 0px 0px 12px 0px rgba(251, 123, 107, 0.3);
  border-radius:50%;
  &:hover,
  &:focus {
    color: #FB7B6B;//${({ theme }) => get(theme, 'colors.light.secondary.main.color')};
  }
`;

export const heart = styled(Heart)`
  margin: 5px 15px;
  color: ${({ theme }) => get(theme, 'colors.light.primary.main.color')};
  height: 30px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => get(theme, 'colors.light.primary.main.color')};
  }
`;

export const homeAlt = styled(HomeAlt)`
  margin: 5px 15px;
  color: #D7385E; //${({ theme }) => get(theme, 'colors.light.primary.main.color')};
  height: 30px;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: #D7385E; //${({ theme }) => get(theme, 'colors.light.primary.main.color')};
  }
`;
