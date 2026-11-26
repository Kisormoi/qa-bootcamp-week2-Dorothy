  
   Feature: Shopping cart
  
    Scenario: Add a product to the shopping cart
    Given the shopper is on the Toolshop homepage
    And a product is available in stock
    When the shopper adds the product to the shopping cart
    Then the product should appear in the shopping cart
    And the cart should show the correct product quantity
