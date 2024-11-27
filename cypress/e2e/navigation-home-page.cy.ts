describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .relative').click();
        cy.get(':nth-child(2) > .relative').click();
        cy.get(':nth-child(3) > .relative').click();
        cy.get(':nth-child(4) > .relative').click();
        /* ==== End Cypress Studio ==== */
    });
});
