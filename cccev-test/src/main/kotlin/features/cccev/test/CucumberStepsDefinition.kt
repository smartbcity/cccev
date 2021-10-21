package features.cccev.test

import features.cccev.test.data.context.TestContext
import features.cccev.test.data.context.TestEntities
import features.cccev.test.exception.EntityNotInitializedException
import features.cccev.test.exception.NullDataTableParamException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import java.util.UUID

open class CucumberStepsDefinition {

    @Autowired
    protected lateinit var context: TestContext

    @Autowired
    protected lateinit var mongoTemplate: MongoTemplate

    protected fun <K: Any, V> Map<K, V>.safeExtract(key: K): V {
        return get(key) ?: throw NullDataTableParamException(key.toString())
    }

    protected inline fun <reified E> String.toListOf(entities: TestEntities<String, E>, delimiter: String = ","): List<E> {
        return toListOf(entities, delimiter) { it }
    }

    protected inline fun <ID: Any, reified E> String.toListOf(
        entities: TestEntities<ID, E>, delimiter: String = ",", parseId: (String) -> ID
    ): List<E> {
        return split(delimiter)
            .map(String::trim)
            .filter(String::isNotEmpty)
            .map(parseId)
            .map { id ->
                entities[id] ?: throw EntityNotInitializedException(id.toString(), E::class.simpleName!!)
            }
    }

    protected fun String?.orRandom() = this ?: UUID.randomUUID().toString()
}
