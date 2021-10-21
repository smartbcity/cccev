package features.cccev.test.exception

class EntityNotInitializedException(
    id: String,
    type: String
): NoSuchElementException("$type [$id] has not been initialized in test context")
