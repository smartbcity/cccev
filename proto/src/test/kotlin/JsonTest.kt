import cccev.dsl.cee.indba116.IND_BA_116
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class JsonTest {

    @Test
    fun test() {
        val mapper = ObjectMapper().registerModule(KotlinModule())
        val json = mapper.writeValueAsString(IND_BA_116)
        println(json)
    }
}