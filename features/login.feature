Feature: Login appian website
    Scenario: Visit login page of appian website
        Given I visit appian website
        When I see google to authenticate click on NO option
        Then I try to login with this credentials:
            | username | password |
            | emirtp8@gmail.com | jukdim-Tatzah-rafdo2 |

    Scenario: Login with invalid credentials
        Given I visit appian website
        When I see google to authenticate click on NO option
        Then I should see appian login page try to login with this credentials:
            | username | password |
            | emirtp8@gmail.com | jukdim-Tatzah-rafdo |

        When I see error message
        