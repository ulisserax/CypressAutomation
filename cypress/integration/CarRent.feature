Feature: CarRent

I want to be possible to search vehicles in a specific period of time in Germany at Berlin
I want to search for a car type that I wish and I expect to obtain only the car that I typed
I want to rent a car and be able to complete the rental payment

Scenario: Filling the blank spaces for Germany and setting the rental period on the main page to search for the vehicle and then clicking on the search button
    Given that I am at the main page
    And I see that there are some blank spaces
    When I click and type to fill the blank space-s and-or click on the dropdown options
    Then a table list is displaying


Scenario: When trying to type the model of the car, we should not see the table list if we type something that does not exist on the database
    Given that I am at the main page
    And I see that there are some blank spaces
    When I click and type to fill the blank space-s and-or click on the dropdown options
    And click on the search button
    Then the table list should not be displayed

Scenario: When trying to rent a vehicle, we should access a page to fill all the personal information to complete the rental process
    Given that I am at the main page
    And I see that there are some blank spaces
    When I click and type to fill the blank space-s and-or click on the dropdown options
    And click on the search button
    And a table list is displaying
    And I click on the rent button
    And I click again on the second rent button
    And I fulfill all the personal information
    Then finally I should be able to finish the rental process


