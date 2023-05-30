// Import required libraries
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import allureReporter from '@wdio/allure-reporter';

Given('I am on the Amazon.in homepage', () => {
  // Navigate to Amazon.in homepage
  cy.visit('https://www.amazon.in/');
});

When('I search for {string}', (item) => {
  // Enter search query and perform search
  cy.get('#twotabsearchtextbox').type(item);
  cy.get('.nav-search-submit > .nav-input').click();
});

When('I select the first search result', () => {
  // Click on the first search result
  cy.get('[data-component-type="s-search-result"]').first().click();
});

When('I add the item to the cart', () => {
  // Add the item to the cart
  cy.get('#add-to-cart-button').click();
});

When('I proceed to checkout', () => {
  // Proceed to the checkout page
  cy.get('#attach-sidesheet-checkout-button').click();
});


Then('I should see the checkout page', () => {
  cy.get('#spc-order-summary > h3').should('contain', 'Order Summary');
});
