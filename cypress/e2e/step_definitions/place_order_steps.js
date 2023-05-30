// Import required libraries
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import allureReporter from '@wdio/allure-reporter';

Given('I am on the Amazon.in homepage', () => {
  // Navigate to Amazon.in homepage
  cy.visit('https://www.amazon.in/');
});

When('I search for {string}', (item) => {
  // Enter search query and perform search
  cy.get('#twotabsearchtextbox').type(`${item}{enter}`);
  cy.viewport(1024, 768);
});

When('I select the first search result', () => {
  // Click on the first search result
  // cy.get('img.s-image').first().invoke('removeAttr', 'target').click();
  cy.get('img.s-image').first().invoke('attr', 'href')
  .then(href => {
    // 'href' will contain the URL value
    cy.log('Extracted URL:', href);
    console.log('Extracted URL:', href);
    // cy.visit(href);
  });
  cy.wait(5000);
});

When('I add the item to the cart', () => {
  // Add the item to the cart
 // cy.wait('#add-to-cart-button');
  cy.get('#add-to-cart-button').click();
});

When('I proceed to checkout', () => {
  // Proceed to the checkout page
  cy.get('#attach-sidesheet-checkout-button').click();
});


Then('I should see the checkout page', () => {
  cy.get('#spc-order-summary > h3').should('contain', 'Order Summary');
});
