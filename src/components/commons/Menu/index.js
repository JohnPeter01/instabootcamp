
import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Text } from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

/*
  Padrão criar uma pasta com o nome do componente e dentro dela fica o index.js com a implementação.
*/

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <Button type="button" ghost variant="light.secondary.main">
          Entrar
        </Button>
        <Button type="button" variant="light.primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}