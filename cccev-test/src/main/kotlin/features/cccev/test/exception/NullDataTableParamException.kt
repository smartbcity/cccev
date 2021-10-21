package features.cccev.test.exception

class NullDataTableParamException(
    param: String
): IllegalDataTableParamException(param, "Should not be null")
