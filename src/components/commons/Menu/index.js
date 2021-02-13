import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

/*
  Padrão criar uma pasta com o nome do componente e dentro dela fica o index.js com a implementação.
*/

export default function Menu(){
    const links = [
        {
          nome: 'Home',
            url:'/'
        },
        {
          nome: 'Perguntas Frequentes',
            url:'/faq'
        },
        {
            nome: 'Sobre',
            url:'/sobre'
        }

    ]
  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {links.map((link) => (
          //Sempre que tiver uma Li é necessario ter um indetificador unico para um elemento
          //, mesmo que não haja diferença de comportamento.
          <li key={link.url}> 
            <a href={link.url}>
              {link.nome}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="light.secondary.main">
            Entrar
        </Button>
        <Button variant="light.primary.main">
            Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}