import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import TextField from '../../commons/forms/TextField';
import { useForm } from '../../../infra/hooks/useForm';

const pesquisaSchema = yup.object().shape({
  pesquisa: yup
    .string()
    .required('Usuário é obrigatorio')
    .min(4, 'Preencha ao menos 4 caracteres.'),
});

export default function FormPesquisa({ onSubmit }) {
  // const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: () => {},
    async validateSchema(values) {
      return pesquisaSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form id="formPesquisa" onSubmit={onSubmit || form.handleSubimmit}>
      <TextField
        placeholder="Pesquisar"
        name="pesquisar"
        value={form.values.usuario}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
    </form>
  );
}
FormPesquisa.defaultProps = {
  onSubmit: undefined,
};

FormPesquisa.propTypes = {
  onSubmit: PropTypes.func,
};
