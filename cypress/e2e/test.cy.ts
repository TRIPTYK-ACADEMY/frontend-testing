describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('#search-box').clear();
    cy.get('#search-box').type('bombasto');
    cy.get('li > a').click();
    cy.get('app-hero-detail > :nth-child(1) > h2').contains('BOMBASTO');
  });

  it('it passes lightouse tests on homepage', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 100,
    });
  });
})
