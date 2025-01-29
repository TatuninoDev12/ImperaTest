Feature: Test Data Inputs
    
  Scenario: Test Data Inputs
    Given I open the appian website
    When I see google to authenticate NO option
    Then I enter the user:
      | username | password |
      | emirtp8@gmail.com | jukdim-Tatzah-rafdo2 |

    Then I Click on Data Inputs
    When I see form with data inputs enter this values:
      | Title | Quantity | Price | Start_Date | hour |
      | Test11 | 10 | 100 | 01/28/2025 | 10:00 am |
      | Test12 | 1 | 10 | 01/29/2025 | 11:00 am |
      | Test13 | 5 | 15 | 01/30/2025 | 12:00 am |

    Then I submit data check if the data is created:
      | Title | Quantity | Price | Start_Date | hour |
      | Test11 | 10 | 100 | 01/28/2025 | 10:00 am |
      | Test12 | 1 | 10 | 01/29/2025 | 11:00 am |
      | Test13 | 5 | 15 | 01/30/2025 | 12:00 am |
    
       