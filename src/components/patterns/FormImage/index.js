/* eslint-disable react/prop-types */
import { Lottie } from '@crello/react-lottie';
import React from 'react';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import { Button } from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { Text } from '../../foundation/Text';
import errorAnimation from '../../../theme/animations/error.json';
import successAnimation from '../../../theme/animations/success.json';
/*
  Esses são os estados de um rqusição,
  assim listados para facilitar a operação
  das respostas.

*/

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    usuario: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
    // Mantem os demais atributos do objeto utilizando Spread
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  /*
  Variavel para validação do botão de confirmação.
*/
  const isFormInvalid = userInfo.nome.length === 0 || userInfo.usuario.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);
        setSubmissionStatus(formStates.DONE);

        // Data Transfer Object
        // const insertImageDTO = {
        //   imageUrl: userInfo.imageUrl,
        // };

        /*
          Requisição realizada para o cadastro de usuarios.
        */

        // fetch('https://instalura-api.vercel.app/api/users', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(insertImageDTO),
        // })
        //   .then((respostaDoServidor) => {
        //     if (respostaDoServidor.ok) {
        //       return respostaDoServidor.json();
        //     }
        //     throw new Error('Não foi possível cadastrar o usuário agora :(');
        //   })
        //   .then((
        //     // respostaConvertidaEmObjeto
        //   ) => {
        //     setSubmissionStatus(formStates.DONE);
        //   })
        //   .catch((error) => {
        //     setSubmissionStatus(formStates.ERROR);
        //     // eslint-disable-next-line no-console
        //     console.log(error);
        //   });
        // .finally(() =>{
        //   setUserInfo({ usuario: '', nome: '' })
        // })
      }}
    >

      <div>
        <TextField
          placeholder="Url da Imagem"
          name="url"
          value={userInfo.imageUrl}
          onChange={handleChange}
        />
        {/* <ArrowRightShort /> */}

        <Button
          type="submit"
          disabled={isFormInvalid}
          variant="light.primary.main"
        >
          Button
        </Button>

        <Text
          variant="paragraph2"
          color="tertiary.light"
          marginTop="35px"
        >
          Formatos suportados: jpg, png, svg e xpto.
        </Text>
      </div>

      {isFormSubmited && submissionStatus === formStates.DONE && (
      <Box>
        <Lottie
          width="150px"
          height="150px"
          config={{ animationData: successAnimation, loop: true, autoplay: true }}
        />
      </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="150px"
          height="150px"
          config={{ animationData: errorAnimation, loop: true, autoplay: true }}
        />
      </Box>
      )}
    </form>
  );
}

export default function FormImage({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
