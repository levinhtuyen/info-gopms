import { enMessages } from '../../fixtures/languages';

describe('toggle-locale', () => {
  before(() => {
    cy.visit('/');
  });

  it('should toggle locale', () => {
    cy.get('button').contains('Click here to change language').click({ force: true });
    cy.wait(2000);
    cy.findAllByText(enMessages.home).should('be.visible');
    cy.findAllByText(enMessages.features).should('be.visible');
    cy.findAllByText(enMessages.price).should('be.visible');
    cy.findAllByText(enMessages.registerNow).should('be.visible');
  });
});
