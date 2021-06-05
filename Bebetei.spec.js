/// <reference types = "Cypress"/>
describe("Product menu", ()=>{
    beforeEach(()=>{
        cy.visit("https://comenzi.bebetei.ro/");
    });
    it("Product menu categories visible",()=>{
        cy.get('.mega-menu-title').should('be.visible');
        cy.get('.mega-menu-category > :nth-child(1) > :nth-child(3) > [href="#"]').should('be.visible');
    });
    it.only("Product description coresponds",()=>{
        cy.get('.mega-menu-category > :nth-child(1) > :nth-child(1) > [href="#"]').click();
        cy.get('.active > .wrap-popup > .popup > [style="display: flex; flex-wrap: wrap;"] > :nth-child(1) > .nav > :nth-child(4) > a').click({force:true});
        cy.get(':nth-child(1) > .item-inner > .item-title > a').should("be.visible");
        cy.get(':nth-child(1) > .item-inner > .row > .col-xs-7 > .item-content > .item-price > .price-box > .regular-price > .price').should("be.visible");
        cy.get(':nth-child(1) > .item-inner > .row > .col-xs-5 > .action > .button').should("be.visible");
        cy.get(':nth-child(1) > .item-inner > .item-img > .item-img-info > .product-image > .img-height-200').should("be.visible");
     });
    it("Add to cart button is visible",()=>{
        cy.get('.mega-menu-category > :nth-child(1) > :nth-child(1) > [href="#"]').click();
        cy.get('.active > .wrap-popup > .popup > [style="display: flex; flex-wrap: wrap;"] > :nth-child(1) > .nav > :nth-child(4) > a').click({force:true});
        cy.get(':nth-child(1) > .item-inner > .item-title').click();
        cy.get(':nth-child(5) > .button').should('be.visible');
    });
    it("Drop down button exists",()=>{
        cy.get('.mega-menu-category > :nth-child(1) > :nth-child(1) > [href="#"]').click();
        cy.get('.active > .wrap-popup > .popup > [style="display: flex; flex-wrap: wrap;"] > :nth-child(1) > .nav > :nth-child(4) > a').click({force:true});
        cy.get(':nth-child(1) > .item-inner > .item-title > a').click();
        cy.get('#addToCartQuantity').should('be.visible');
     });
    it('Available filters',()=>{
        cy.get('.mega-menu-category > :nth-child(1) > :nth-child(1) > [href="#"]').click();
        cy.get('.active > .wrap-popup > .popup > [style="display: flex; flex-wrap: wrap;"] > :nth-child(1) > .nav > :nth-child(4) > a').click({force:true});
        cy.get('#cd-filter').should('be.visible');
    });
});