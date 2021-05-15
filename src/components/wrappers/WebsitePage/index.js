/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import MenuLogado from '../../commons/MenuLogado';
import ModalCadasro from '../../commons/Modais/ModalCadastro';
import ModalinserirFoto from '../../commons/Modais/ModalInserirFoto';
import { Box } from '../../foundation/Layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';
import { WebsitePageContext } from './context';
import FormImage from '../../patterns/FormImage';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuOnlineProps,
  menuOfflineProps,
  messages,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />

      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        {...pageBoxProps}
      >
        {menuOfflineProps.display && (
        <ModalCadasro
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </ModalCadasro>
        )}

        {menuOnlineProps.display && (
        <ModalinserirFoto
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormImage propsDoModal={propsDoModal} />
          )}
        </ModalinserirFoto>
        )}

        {menuOnlineProps.display && (
          <MenuLogado
            onCadastrarClick={() => setModalState(true)}
          />
        )}

        {menuOfflineProps.display && (
          <Menu
            onCadastrarClick={() => setModalState(true)}
          />
        )}

        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuOnlineProps: {
    display: true,
  },
  menuOfflineProps: {
    display: true,
  },
  modal: {
    display: 1,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuOnlineProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  menuOfflineProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  modal: PropTypes.shape({
    display: PropTypes.number,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  messages: PropTypes.object,
};
