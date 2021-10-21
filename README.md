# Welcome to CCCEV-CEE

### Request score computation

Each InformationConcept has its own score. The total score of a request is the average score of all its InformationConcepts.  

**Computation rules per field**
  - Score value goes from 0 to 100 included
  - A field with an auto-computed value does not have a score
  - Having no value blocks the score to 0, no matter if some other conditions are verified
  - Having a value gives +50 score
  - The rest is computed according to the provided evidences for the field (from 0 to 50 included)
    - Each EvidenceTypeList has its own score
    - The final score corresponds to the highest amongst the EvidenceTypeLists
    - The score of an ETL is `(totalEvidenceTypes / numberOfFulfilledEvidenceTypes) * 50` 
