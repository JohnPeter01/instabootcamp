/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/LoginScreen/LoginScreenPageObject';

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    loginScreen
      .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
      .subimitLoginForm();

    cy.url().should('include', '/app/profile');

    cy.wait('@userLogin').then((intercept) => {
      const { token } = intercept.response.body.data;

      cy.getCookie('APP_TOKEN')
        .should('exist')
        .should('have.property', 'value', token);
    });
  });
});
