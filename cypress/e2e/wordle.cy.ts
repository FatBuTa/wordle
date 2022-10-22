describe('Wordle page', () => {
  it('Load page', () => {
    cy.visit('/wordle');
  });

  it('Default customer checkout', () => {
    cy.visit('/wordle');
    cy.intercept({
      method: 'GET',
      url: 'https://wordle.votee.dev:8000/daily*',
    }, { fixture: 'daily-test.json' }).as('guessDailyWord');

    cy.get('button').contains('j').click();
    cy.get('button').contains('r').click();
    cy.get('button').contains('e').click();
    cy.get('button').contains('c').click();
    cy.get('button').contains('v').click();
    cy.get('button').contains('Enter').click();

    cy.get('div').contains('j').should('have.css', 'background-color', 'rgb(121, 184, 81)');
    cy.get('div').contains('r').should('have.css', 'background-color', 'rgb(164, 174, 196)');
    cy.get('div').contains('e').should('have.css', 'background-color', 'rgb(243, 194, 55)');
    cy.get('div').contains('c').should('have.css', 'background-color', 'rgb(164, 174, 196)');
    cy.get('div').contains('v').should('have.css', 'background-color', 'rgb(164, 174, 196)');
  });
})