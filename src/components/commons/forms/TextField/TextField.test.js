import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../../infra/tests/testUtils';
import TextField from '.';

describe('<TextField/>', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
        onChange={() => {}}
        name="nome"
      />
      ,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when the filed is valid', () => {
    describe('and the user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'usuarioTest');

        expect(onChangeMock).toHaveBeenCalledTimes(11);
      });
    });
  });

  describe('when the filed is invalid', () => {
    test('display the respective erro messasge', () => {
      render(
        <TextField
          placeholder="Email"
          value="devtestemailgmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />
        ,
      );
      // elemento tenha o span de texto
      // muda CSS
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('devtestemailgmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
