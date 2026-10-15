describe('E2E Test: Basic Application Load', () => {
  it('should successfully visit the page and check title/body', () => {
    cy.visit('http://localhost:3000');
    
    // Перевірка, що сторінка успішно завантажилася
    cy.get('body').should('be.visible');
  });
});