describe('E2E Test: Basic Application Load (Pentagon L4)', () => {
  it('should successfully visit the page and check title/body', () => {
    const baseUrl = Cypress.env('BASE_URL') || 'http://127.0.0.1:8080';
    cy.visit(`${baseUrl}/index.html`);

    // Перевірка, що сторінка та ключові UI-компоненти успішно завантажилися
    cy.get('body').should('be.visible');
    cy.get('#eventsGrid').should('exist');
    cy.get('#map').should('exist');
  });
});
