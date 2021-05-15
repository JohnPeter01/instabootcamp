import React from 'react';
import { Button } from '../../commons/Button';
import { Grid } from '../../foundation/Layout/Grid';
import { Text } from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          offset={1}
          value={{ xs: 12, md: 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <div>
            <Text
              variant="title"
              tag="h1"
              color="light.tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="light.tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </Text>

            <Button
              variant="light.primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                websitePageContext.toggleModalCadastro();
              }}
            >
              Cadastrar
            </Button>
          </div>
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 6 }}>
          <img
            alt=""
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
