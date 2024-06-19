Feature: signup to Automation Excercise website

    Scenario Outline: Login and Fill the Automation Excercise form
        Given I visit to Automation Excercise website <index>
        And click on signup login button
        When i enter username and userEmail and click on login button
        And i enter user information and click on account create button
        When i verify new user created
        Then i verify new user login


        Examples:
            | index |
            | 0     |
            | 1     |







