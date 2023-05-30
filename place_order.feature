Feature: Place an order on Amazon.in
  Scenario: Placing an order with valid items
    Given I am on the Amazon.in homepage
    When I search for "Samsung galaxy"
    And I select the first search result
    And I add the item to the cart
    And I proceed to checkout
    Then I should see the checkout page

  Scenario: Placing an order with valid item
    Given I am on the Amazon.in homepage
    When I search for "valid item"
    Then I should see search results
    And I should see the searched result