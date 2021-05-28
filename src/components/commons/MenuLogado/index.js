import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import { MenuLogadoWrapper } from './styles/MenuLogadoWrapper';
import { TabBar } from '../TabBar';

export default function MenuLogado({ onCadastrarClick }) {
  return (
    <MenuLogadoWrapper>
      <MenuLogadoWrapper.LeftSide>
        <Logo />
      </MenuLogadoWrapper.LeftSide>
      <MenuLogadoWrapper.CentralSide as="ul" />
      <MenuLogadoWrapper.RightSide>
        <TabBar onClickFunc={onCadastrarClick} />
      </MenuLogadoWrapper.RightSide>
    </MenuLogadoWrapper>
  );
}

MenuLogado.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
