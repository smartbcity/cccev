Feature: GetRequestScore

  Scenario: I want to compute the score of a request with a single field without value nor evidence
    Given An evidence type is created
      | identifier |
      | ET_1        |
    And An evidence type list is created
      | identifier | evidenceTypes |
      | ETL_1      | ET_1           |
    And An information concept is created
      | identifier |
      | IC_1       |
    And A requirement is created
      | informationConcepts | evidenceTypeLists |
      | IC_1                | ETL_1             |
    And A request is instantiated from this requirement
    When I fetch the score of this request
    Then The score of each information concept of this request is computed
      | informationConcept | score |
      | IC_1               | 0     |
    And The total score of this request is the average of all its information concepts

  Scenario: I want to compute the score of a request with a single completed field without evidence
    Given An evidence type is created
      | identifier |
      | ET_1        |
    And An evidence type list is created
      | identifier | evidenceTypes |
      | ETL_1      | ET_1           |
    And An information concept is created
      | identifier |
      | IC_1       |
    And A requirement is created
      | informationConcepts | evidenceTypeLists |
      | IC_1                | ETL_1             |
    And A request is instantiated from this requirement
    And Some supported values are added to this request
      | informationConcept | value |
      | IC_1               | 100   |
    When I fetch the score of this request
    Then The score of each information concept of this request is computed
      | informationConcept | score |
      | IC_1               | 50     |
    And The total score of this request is the average of all its information concepts

  Scenario: I want to compute the score of a request with a single completed field with evidence
    Given An evidence type is created
      | identifier |
      | ET_1       |
    And An evidence type list is created
      | identifier | evidenceTypes |
      | ETL_1      | ET_1           |
    And An information concept is created
      | identifier |
      | IC_1       |
    And A requirement is created
      | informationConcepts | evidenceTypeLists |
      | IC_1                | ETL_1             |
    And A request is instantiated from this requirement
    And Some supported values are added to this request
      | informationConcept | value |
      | IC_1               | 100   |
    And Some evidences are added to this request
      | evidenceType |
      | ET_1         |
    When I fetch the score of this request
    Then The score of each information concept of this request is computed
      | informationConcept | score |
      | IC_1               | 100   |
    And The total score of this request is the average of all its information concepts

  Scenario: I want to compute the score of a complex request
    Given Some evidence types are created
      | identifier |
      | ET_A1      |
      | ET_A2      |
      | ET_A3      |
      | ET_A4      |
      | ET_B1      |
      | ET_B2      |
    And Some evidence type lists are created
      | identifier | evidenceTypes              |
      | ETL_A      | ET_A1, ET_A2, ET_A3, ET_A4 |
      | ETL_B      | ET_B1, ET_B2               |
    And Some information concepts are created
      | identifier |
      | IC_Equity  |
      | IC_Scope   |
    And Some requirements are created
      | identifier   | informationConcepts | evidenceTypeLists |
      | Rqrmt_Equity | IC_Equity           | ETL_A, ETL_B      |
      | Rqrmt_Scope  | IC_Scope            | ETL_B             |
    And A requirement is created
      | requirements              |
      | Rqrmt_Equity, Rqrmt_Scope |
    And A request is instantiated from this requirement
    And Some supported values are added to this request
      | informationConcept | value |
      | IC_Equity          | 100   |
      | IC_Scope           | 100   |
    And Some evidences are added to this request
      | evidenceType |
      | ET_A1        |
      | ET_A2        |
      | ET_A3        |
      | ET_B1        |
    When I fetch the score of this request
    Then The score of each information concept of this request is computed
      | informationConcept | score |
      | IC_Equity          | 87.5  |
      | IC_Scope           | 75     |
    And The total score of this request is the average of all its information concepts
