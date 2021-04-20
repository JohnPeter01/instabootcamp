import React from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Button } from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import { useForm } from '../../../infra/hooks/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('Usuário é obrigatorio')
    .min(4, 'Preencha pelo menos 4 caracteres.'),
  senha: yup
    .string()
    .required()
    .min(8, 'Preencha pelomenos  8 carcteres'),
});

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
    async  validateSchema(values) {
      return loginSchema.validate(values, { abortEarly: false });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubimmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        onChange={form.handleChange}
        isTouched={form.touched.usuario}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        error={form.errors.senha}
        value={form.values.senha}
        onChange={form.handleChange}
        isTouched={form.touched.senha}
        onBlur={form.handleBlur}
      />

      <Button
        type="submit"
        variant="light.primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
}
