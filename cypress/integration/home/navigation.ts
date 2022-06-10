import { viMessages } from '../../fixtures/languages';
import { ID } from '../../fixtures/ids';
import { YOUTUBE_VIDEO_LINK, GOPMS_EMAIL_ADDRESS } from '../../fixtures/links';
import '@testing-library/cypress';

describe('navigation', () => {
  before(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  const checkElementAtTheTopOfTheScreen = (element: JQuery<HTMLElement>) =>
    cy.wrap(element[0].getBoundingClientRect().y).should('be.within', -5, 5);

  context('header navigation', () => {
    let header: Cypress.Chainable<JQuery<HTMLElement>>;

    beforeEach(() => {
      header = cy.get('header:visible');
    });

    it('should have header', () => {
      cy.get('header:visible').should('exist');
    });

    it('should travel to homepage', () => {
      cy.get('header:visible')
        .findByAltText('GoPMS logo')
        .parent()
        .should('have.attr', 'href', '/')
        .and('not.have.attr', 'target', '_blank');

      cy.get('header:visible')
        .findByAltText('GoPMS letter logo')
        .parent()
        .should('have.attr', 'href', '/')
        .and('not.have.attr', 'target', '_blank');
    });

    it('should scroll to the price section', () => {
      header.find('nav:visible').findByText(viMessages.price).click();
      cy.wait(2000);
      cy.get(`#${ID.priceSection}`).then(checkElementAtTheTopOfTheScreen);
    });

    it('should scroll to the features section', () => {
      header.find('nav:visible').findByText(viMessages.features).click();
      cy.wait(2000);
      cy.get(`#${ID.featuresSection}`).then(checkElementAtTheTopOfTheScreen);
    });

    it('should scroll to the top', () => {
      header.find('nav:visible').findByText(viMessages.home).click();
      cy.wait(2000);
      cy.window().its('scrollY').should('be.within', -5, 5);
    });

    it('should scroll to the register form', () => {
      header.find('button:visible').contains(viMessages.registerNow).click();
      cy.wait(2000);
      cy.get(`#${ID.registerForm}`).then(checkElementAtTheTopOfTheScreen);
    });
  });

  context('footer navigation', () => {
    beforeEach(() => {
      cy.get('footer').last().scrollIntoView();
    });

    it('should have footer', () => {
      cy.get('footer').last().should('exist');
    });

    it('should scroll to the top', () => {
      cy.get('footer').last().findByText(viMessages.home).click();
      cy.wait(2000);
      cy.window().its('scrollY').should('be.within', -5, 5);
    });

    it('should scroll to the features section', () => {
      cy.get('footer').last().findByText(viMessages.features).click();
      cy.wait(2000);
      cy.get(`#${ID.featuresSection}`).then(checkElementAtTheTopOfTheScreen);
    });

    it('should scroll to the price section', () => {
      cy.get('footer').last().findByText(viMessages.price).click();
      cy.wait(2000);
      cy.get(`#${ID.priceSection}`).then(checkElementAtTheTopOfTheScreen);
    });

    it('should scroll to the register form', () => {
      cy.get('footer').last().findByText(viMessages.register).click();
      cy.wait(2000);
      cy.get(`#${ID.registerForm}`).then(checkElementAtTheTopOfTheScreen);
    });

    it('should travel to youtube on a new tab', () => {
      cy.get('footer')
        .last()
        .findByText('Video')
        .should('have.attr', 'href', YOUTUBE_VIDEO_LINK)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    });

    it('should open email app', () => {
      cy.get('footer')
        .last()
        .findByText(GOPMS_EMAIL_ADDRESS)
        .should('have.attr', 'href', `mailto:${GOPMS_EMAIL_ADDRESS}`)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener');
    });
  });

  context('register button on intro section', () => {
    before(() => {
      cy.scrollTo(0, 0);
    });

    it('should scroll to the register form', () => {
      cy.get(`#${ID.introSection}`).findByText(viMessages.registerNow).click();
      cy.wait(2000);
      cy.get(`#${ID.registerForm}`).then(checkElementAtTheTopOfTheScreen);
    });
  });

  context('register button on price section', () => {
    before(() => {
      cy.get(`#${ID.priceSection}`).scrollIntoView();
    });

    it('should scroll to the register form', () => {
      cy.get(`#${ID.priceSection}`).findByText(viMessages.registerNow).click();
      cy.wait(2000);
      cy.get(`#${ID.registerForm}`).then(checkElementAtTheTopOfTheScreen);
    });
  });

  context('back-to-top button', () => {
    before(() => {
      cy.get('footer').last().scrollIntoView();
    });

    it('should scroll to the top', () => {
      cy.get('button').contains('Click here to scroll to the top').click({ force: true });
      cy.wait(2000);
      cy.window().its('scrollY').should('be.within', -5, 5);
    });
  });
});
