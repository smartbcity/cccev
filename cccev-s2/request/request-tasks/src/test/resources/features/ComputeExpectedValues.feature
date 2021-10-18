Feature: ComputeExpectedValuesHandler

  Scenario: Whenever a supported value is added, I want to compute the values of the info concepts depending on it
    Given The framework "carboncopy" is instantiated
    And A request is instantiated on this framework
    When Some supported values are added
      | name    | value |
      | Scope 1 | 100   |
      | Scope 2 | 200   |
      | Scope 3 | 300   |
    Then The value of the information concept is computed
      | name        | value |
      | Scope Total | 600   |
