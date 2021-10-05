Feature: GetEvidenceTypeLists

  Scenario: I want to fetch all the evidences needed in a requirement
    Given I have the requirement "carbonCopy"
    When I fetch the evidences needed in the requirement
    Then I get all the evidence type lists