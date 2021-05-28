import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.colors.modes.light.tertiary.light.color};
  cursor: pointer;
`;

export function ModalCloseButton({ closeModal }) {
  return (
    <CloseButtonWrapper onClick={closeModal} role="button">
      <CloseIcon size={24} title="Botão para fechar a modal" />
    </CloseButtonWrapper>
  );
}

ModalCloseButton.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
