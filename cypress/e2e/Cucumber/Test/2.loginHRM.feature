Feature: verify the login functionality of OHRM web page
    Scenario: TC 001 varify login functionality for valid user

        Given  navigate to the OHRM web site
        When i enterd username and password
            | username | password |
            | Admin    | admin123 |
        And  click on login button
        Then validate for valid user page


    Scenario: TC 002 varify login functionality for valid user

        Given  navigate to the OHRM web site
        When i enterd <username> and <password>
        And  click on login button
        Then validate for valid user page

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | admin123 |


        # Examples:
        #     | Header 1 | Header 2 | Header 3 |
        #     | Value 1  | Value 2  | Value 3  |


    Scenario Outline: TC 003 Verify login functionality OHRM
        Given Navigate to OHRM url page
        When I enter <username1> and <password1>
        And click on login button
        Then validate for valid and invalid <credentials>

        Examples:
            | username1 | password1 | credentials |
            | Admin     | admin123  | valid       |
            | Abc       | abc123    | invalid     |
    @smoke

    Scenario Outline: TC 004 Verify login functionality OHRM
        Given Navigate to OHRM url page
        When I enter for "<username1>" and "<password1>"
        And click on login button
        Then validate for value valid and invalid "<credentials>"

        Examples:
            | username1 | password1 | credentials |
            | Admin     | admin123  | valid       |
            | Abc       | abc123    | invalid     |






