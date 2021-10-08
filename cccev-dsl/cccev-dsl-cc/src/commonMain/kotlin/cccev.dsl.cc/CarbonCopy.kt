package cccev.dsl.cc

import ccev.dsl.core.criterion

val CarbonCopy = criterion {
    identifier = "carboncopy"
    name = "Carbon Copy"
    type = CC
    +ScopeInfo
    +VintagePeriod
}

val Equity = criterion {
    identifier = "carbonequity"
    name = "Equity participation"
    description = "Equity participation refers to the ownership of shares in a company or property. " +
            "The greater the equity participation rate, the higher the percentage of carbon emissions affected to stakeholders"
    type = CC
    +ScopeInfo
    +VintagePeriod
    +EquityInfo
}
