import React from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);
  return {
    values,
    handleSubimmit(event) {
      event.preventDefault();
      onSubmit(values);
      console.log('Formulário foi submetido');
    },
    handleChange(event) {
      const fielName = event.target.getAttribute('name');

      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fielName]: value,
      }));
    },
  };
}
