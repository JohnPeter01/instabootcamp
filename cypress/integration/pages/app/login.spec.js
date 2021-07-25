/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/LoginScreen/LoginScreenPageObject';
import { LOGIN_COOKIE_APP_TOKEN } from '../../../../src/services/login/loginService';

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    loginScreen
      .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
      .subimitLoginForm();

    cy.url().should('include', '/app/feed');

    cy.wait('@userLogin').then((intercept) => {
      const { token } = intercept.response.body.data;

      cy.getCookie(LOGIN_COOKIE_APP_TOKEN)
        .should('exist')
        .should('have.property', 'value', token);
    });
  });
});
