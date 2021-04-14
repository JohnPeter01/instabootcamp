import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import { useForm } from '../../../infra/hooks/useForm';
import { loginService } from '../../../services/login/loginService';

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario, // 'omariosouto'
        password: values.senha, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/profile/');
        });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubimmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />

      <Button
        type="submit"
        variant="light.primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
