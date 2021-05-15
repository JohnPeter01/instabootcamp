import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from '../Button';
import { Logo } from '../../../theme/Logo';
import FormPesquisa from '../../patterns/FormPesquisa';
import { MenuLogadoWrapper } from './styles/MenuLogadoWrapper';
import { homeAlt as HomeAlt, heart as Heart, plusCircle as PlusCircle } from '../../display/Icons';

/*
  Padrão criar uma pasta com o nome do componente e dentro dela fica o index.js com a implementação.
*/

export default function MenuLogado({ onCadastrarClick }) {
  return (
    <MenuLogadoWrapper>
      <MenuLogadoWrapper.LeftSide>
        <Logo />
      </MenuLogadoWrapper.LeftSide>
      <MenuLogadoWrapper.CentralSide as="ul" />
      <MenuLogadoWrapper.RightSide>
        <FormPesquisa />
        <PlusCircle />
        <HomeAlt />
        <Heart onClick={onCadastrarClick} />
      </MenuLogadoWrapper.RightSide>
    </MenuLogadoWrapper>
  );
}

MenuLogado.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
