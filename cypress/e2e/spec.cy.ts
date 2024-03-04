describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Tour of Heroes');
  });

  it('When i click on heroes button, it should show all heroes', () => {
    cy.visit('/');
    cy.get('[routerlink="/heroes"]').click();
    cy.get('.heroes > :nth-child(1)').should('exist');
  });

  it('Should add a hero to the list when clicking on "add an hero" button', () => {
    cy.visit('/');
    cy.get('[routerlink="/heroes"]').click();
    cy.get('#new-hero').clear();
    cy.get('#new-hero').type('Grobatar');
    cy.get('.add-button').click();
    cy.get('.heroes').contains('Grobatar')
  });
})
