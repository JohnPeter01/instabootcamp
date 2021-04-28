import React from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button } from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import { useForm } from '../../../infra/hooks/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('Usuário é obrigatorio')
    .min(4, 'Preencha ao menos 4 caracteres.'),
  senha: yup
    .string()
    .required()
    .min(8, 'Preencha ao menos  8 carcteres'),
});

export default function LoginForm({ onSubmit }) {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.usuario, // 'omariosouto'
        password: values.senha, // 'senhasegura'
      })
        .then(() => {
          router.push('/app/profile');
        })
        .catch((err) => {
          // Desafio: Mostrar o erro na tela
          console.error(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubimmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        error={form.errors.senha}
        value={form.values.senha}
        isTouched={form.touched.senha}
        onChange={form.handleChange}
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
LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
