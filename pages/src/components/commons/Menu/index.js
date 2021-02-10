import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper'

/*
  Padrão criar uma pasta com o nome do componente e dentro dela fica o index.js com a implementação.
*/

export default function Menu(){
    const links = [
        {
            texto: 'Home',
            url:'/'
        },
        {
            texto: 'Perguntas Frequentes',
            url:'/faq'
        },
        {
            texto: 'Sobre',
            url:'/sobre'
        }

    ]
  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => 
                <li>
                    <a href={link}>
                        {link.texto}
                    </a>
                </li>)}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>
            Entrar
        </button>
        <button>
            Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}