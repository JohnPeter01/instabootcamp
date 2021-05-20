/* eslint-disable react/prop-types */
import React from 'react';
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
// import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

// const FormImagemWrapper = styled.div`
//   background-color: ${({ theme }) => theme.colors.background.light.color};
//   width: 100%;
//   max-width: 375px;
//   max-height: 702px;
//   position: relative;
//   ${breakpointsMedia({
//     md: css`
//       border-radius: 8px;
//     `,
//   })}
// `;

const ImagePlaceholderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    width: 100%;
    height: 100%;

  figure {
    margin: 0px;
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function ImagePlaceholder({ url, filter }) {
  const photoUrl = url || 'https://via.placeholder.com/200';

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

export default function FormImage({ propsDoModal }) {
  const postSchema = {};
  const form = useForm({
    initialValues: {
      photoUrl: '',
      description: 'ma oe',
      filter: 'nenhum',
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
        maxHeight="50rem"
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
          <ModalCloseButton />
          <ImagePlaceholder url={form.values.photoUrl} filter="nenhum" />
          {/* <FormContent /> */}
          <InputSection form={form} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
