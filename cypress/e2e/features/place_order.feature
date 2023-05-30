Feature: Place an order on Amazon.in
  Scenario: Placing an order with valid items
    Given I am on the Amazon.in homepage
    When I search for "Samsung galaxy"
    And I select the first search result
    