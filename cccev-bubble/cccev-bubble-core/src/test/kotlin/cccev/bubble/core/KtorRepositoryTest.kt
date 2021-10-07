package cccev.bubble.core

import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test

internal class KtorRepositoryTest {


	private val ktorRepository = KtorRepository("95f4b5790e3d55cee1f6badeb192c9a1")

	@Test
	fun getList() = runBlocking{
		val list = ktorRepository.getList<SupportedValue>()

		list.response.results.forEach {
			val getOne = ktorRepository.getOne<SupportedValue>(it._id!!)
			println(it)
			println(getOne)
		}
	}

	@Test
	fun save() = runBlocking{
		val valueToSave = SupportedValue(
			_id = null,
			entry="1633104238709x272441961873145860",
			evidence="//s3.amazonaws.com/appforest_uf/f1633104253493x735540863802445200/taylor.png",
			label="testFromApiAdrien",
			requirement="1630968621009x407989941209474500",
		)


		val result = ktorRepository.saveObject(valueToSave)
		val created = ktorRepository.getOne<SupportedValue>(result.id)
		println(created)

	}
}