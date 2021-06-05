/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowForwardOutline as ArrowIcon } from '@styled-icons/evaicons-outline/ArrowForwardOutline';
import styled, { css } from 'styled-components';
import { Button } from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { Text } from '../../foundation/Text';

import { useForm } from '../../../infra/hooks/useForm';
import { ModalCloseButton } from '../../commons/Modais/ModalCloseButton';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const FILTERS = [
  'nenhum',
  '1977',
  'aden',
  'amaro',
  'ashby',
  'brannan',
  'brooklyn',
  'charmes',
  'clarendon',
  'crema',
  'dogpatch',
  'earlybird',
  'gingham',
  'ginza',
  'hefe',
  'helena',
  'hudson',
  'inkwell',
  'kelvin',
  'juno',
  'lark',
  'lofi',
  'ludwig',
  'maven',
  'mayfair',
  'moon',
  'nashville',
  'perpetua',
  'poprocket',
  'reyes',
  'rise',
  'sierra',
  'skyline',
  'slumber',
  'stinson',
  'sutro',
  'toaster',
  'valencia',
  'vesper',
  'walden',
  'willow',
  'xpro-ii',
];

const FormImagemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.modes.light.background.light.color};
  width: 100%;
  max-width: 375px;
  max-height: 702px;
  position: relative;
  ${breakpointsMedia({
    md: css`
      border-radius: 8px;
    `,
  })}
`;

const ImagePlaceholderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

  figure {
    margin: 0px;
    height: 100%;
    img {
    width: 100%;
    height: 600px;
      object-fit: cover;
    }
  }
`;

function ImagePlaceholder({ url, filter }) {
  const photoUrl = url || 'https://via.placeholder.com/600';

  return (
    <ImagePlaceholderWrapper>
      <figure className={`filter-${filter}`}>
        <img src={photoUrl} alt="" />
      </figure>
    </ImagePlaceholderWrapper>
  );
}

ImagePlaceholder.propTypes = {
  url: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

function InputSection({ form }) {
  return (
    <>
      <TextField
        name="photoUrl"
        placeholder="URL da Imagem"
        value={form.values.photoUrl}
        onChange={form.handleChange}
        isTouched={form.touched.usuario}
        error={form.errors.usuario}
        onBlur={form.handleBlur}
      >
        <Button
          variant="light.secondary.main"
          onClick={() => {}}
          style={{
            position: 'absolute',
            right: '0px',
            height: '100%',
            width: '48px',
            padding: '12px 12px',
          }}
        >
          <ArrowIcon size={24} fill="white" />
        </Button>
      </TextField>
      <Text
        variant="paragraph2"
        color="light.tertiary.light"
        textAlign="center"
        marginTop="-9px"
        marginBottom="15px"
      >
        Formatos suportados: jpg, png, svg e xpto.
      </Text>
    </>
  );
}
InputSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  cursor: pointer;
  figure {
    margin: 0;
    height: 88px;
    width: 88px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function FilterPlaceholder({ filter, photoUrl, setSelectedFilter }) {
  return (
    <FilterWrapper
      onClick={() => setSelectedFilter(filter)}
    >
      <figure className={`filter-${filter}`}>
        {/* <img src="https://via.placeholder.com/88" alt="" /> */}
        <img src={photoUrl} alt="" />
      </figure>
      <Text
        variant="smallestException"
        color="tertiary.light"
      >
        {filter}
      </Text>
    </FilterWrapper>
  );
}

FilterPlaceholder.propTypes = {
  filter: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};

function FilterSection({ photoUrl, setSelectedFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        columnGap: '16px',
        overflowX: 'auto',
        overflowY: 'hidden',
        width: '600px',
        margin: '20px',
      }}
    >
      {FILTERS.map((filterOption) => (
        <FilterPlaceholder
          filter={filterOption}
          photoUrl={photoUrl}
          setSelectedFilter={setSelectedFilter}
          key={filterOption}
        />
      ))}
    </div>
    // <FilterPlaceholder filter="" />
  );
}

FilterSection.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};

function ButtonForm({ isSecondPage, children, onClick }) {
  return (
    <Button
      variant="light.primary.main"
      margin={isSecondPage ? '0px 0px 50px 0px' : '0px 0px 50px 0px'}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      <Text
        variant="paragraph2"
        style={{ color: 'white' }}
      >
        {/* {(isSecondPage && 'Postar') || 'Avançar'} */}
        {children}
      </Text>
    </Button>
  );
}

ButtonForm.propTypes = {
  isSecondPage: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function FormImage({ propsDoModal, onSubmit, onClose }) {
  const [secondPage, setSecondPage] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('nenhum');

  const postSchema = {};
  const form = useForm({
    initialValues: {
      photoUrl: '',
      description: 'test',
      filter: selectedFilter,
    },
    onSubmit: (values) => {
      form.setIsFormDisabled(true);

      console.log(values);

      // postService.post({
      //   photoUrl: values.photoUrl,
      //   description: values.description,
      //   filter: selectedFilter,
      // })
      //   .then(() => {
      //     // Mensagem de sucesso
      //     console.log('sucesso!');
      //   })
      //   .catch(() => {
      //     // Faça alguma coisa com o erro
      //     form.setIsFormDisabled(false);
      //   });
    },
    async validateSchema(values) {
      return postSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  function togglePage() {
    setSecondPage(!secondPage);
  }

  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
        marginTop="5rem"
        maxHeight={secondPage ? '100%' : '50rem'}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <ModalCloseButton
            closeModal={onClose}
            style={{
              paddingTop: secondPage ? '45px' : '5px',
            }}
          />
          <ImagePlaceholder url={form.values.photoUrl} filter="nenhum" />
          <Grid.Container>
            <Grid.Row>
              <Grid.Col
                display="flex"
                flexDirection="column"
              >
                {(secondPage
              && (
                <form
                  id="formImagem"
                  onSubmit={onSubmit || form.handleSubmit}
                >
                  <FilterSection
                    form={form}
                    photoUrl={form.values.photoUrl}
                    setSelectedFilter={setSelectedFilter}
                  />
                  <ButtonForm type="submit" isSecondPage={secondPage}>
                    Postar
                  </ButtonForm>
                </form>
              )) || (
                <>
                  <InputSection form={form} />
                  <ButtonForm
                    type="button"
                    onClick={() => togglePage()}
                    isSecondPage={secondPage}
                  >
                    Avançar
                  </ButtonForm>
                </>
                )}
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
