Feature: verify login functionality of contactUs page


    Scenario Outline: login to the contactUs page
        Given Navigate to contactUs page <index>
        When I enter the user details
        And I clicl on submit button
        Then verify the login text

        Examples:
            | index |
            | 0     |
            | 1     |
