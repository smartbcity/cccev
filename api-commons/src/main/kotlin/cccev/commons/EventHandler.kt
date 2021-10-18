package cccev.commons

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.springframework.dao.OptimisticLockingFailureException

abstract class EventHandler {

    fun handleEvent(
        logMessage: String, retryOnOptimisticLockFailure: Int = 5,
        mustHandle: suspend () -> Boolean = { true }, handleError: suspend (Exception) -> Unit = {}, exec: suspend () -> Unit
    ) = GlobalScope.launch(Dispatchers.IO) {
        if (!mustHandle()) {
            return@launch
        }
        handleEvent(logMessage, retryOnOptimisticLockFailure, {}, handleError) { _ -> exec() }
    }

    fun <T> handleEvent(
        logMessage: String, retryOnOptimisticLockFailure: Int = 5,
        prepareForExecution: suspend () -> T? = { null }, handleError: suspend (Exception) -> Unit = {}, exec: suspend (T) -> Unit
    ) = GlobalScope.launch(Dispatchers.IO) {
        val preparation = prepareForExecution() ?: return@launch
        println("$logMessage: Start")

        try {
            execWithRetryOnOptimisticFailure(retryOnOptimisticLockFailure, logMessage) { exec(preparation) }
            println("$logMessage: End")
        } catch (e: Exception) {
            println("$logMessage: Error")
            e.printStackTrace()
            handleError(e)
        }
    }

    private suspend fun execWithRetryOnOptimisticFailure(availableRetries: Int, logMessage: String, exec: suspend () -> Unit) {
        try {
            exec()
        } catch (e: OptimisticLockingFailureException) {
            if (availableRetries == 0) {
                throw e
            }
            println("$logMessage: OptimisticLockingFailureException, retrying operation (retries left: $availableRetries)")
            execWithRetryOnOptimisticFailure(availableRetries - 1, logMessage, exec)
        }
    }
}