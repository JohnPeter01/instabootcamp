/* eslint-disable no-undef */
import React from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  async function validateValues(currentValues) {
    try {
      validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = err.inner.reduce((errorObjectAcc, currentError) => {
        const fieldName = currentError.path;
        const errorMessage = currentError.message;
        return {
          ...errorObjectAcc,
          [fieldName]: errorMessage,
        };
      }, {});
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }

  React.useEffect(() => {
    validateValues();
  }, [values]);

  return {
    values,
    handleSubimmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fielName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fielName]: value,
      }));
    },
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
