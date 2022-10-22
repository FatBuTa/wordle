describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Contain a wordle game', () => {
    cy.get('[data-cy="games"] a').should('have.length', 1)
  });

  it('Navigate to wordle game', () => {
    cy.get('[data-cy="wordle"]').click();
    cy.url().should('include', '/wordle');
  });
});
