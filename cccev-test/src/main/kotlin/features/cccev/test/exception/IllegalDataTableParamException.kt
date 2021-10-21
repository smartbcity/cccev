package features.cccev.test.exception

open class IllegalDataTableParamException(
    param: String,
    cause: String
): IllegalArgumentException("Parameter `$param` invalid: $cause")

