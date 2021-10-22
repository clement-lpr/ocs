// https://docs.cypress.io/api/introduction/api.html
// @ts-check

beforeEach(() => {
  cy.visit('http://localhost:8080');
});
describe('API', () => {
  it('contents => shoud return a 200 status when called with a valid title', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.ocs.fr/apps/v2/contents?search=title=ha',
      failOnStatusCode: false,
    })
      .its('status')
      .should('equal', 200);
  });
});

describe('Search component', () => {
  it('Should display the video when correct input is typed', () => {
    cy.get('#search').type('ha');
    cy.get('#search').invoke('val').should('be.ok');
    cy.get('#search').invoke('val').should('not.be.empty');
    cy.get('#THEHAND0410W0176874').should('exist');
    cy.get('#THEHAND0410W0176874').trigger('click');
    cy.get('#playButton').should('exist');
    cy.get('#playButton').trigger('click');
  });
});
