package cccev.bubble.core

import cccev.dsl.cc.Scope1
import cccev.dsl.cc.Scope2
import cccev.dsl.cc.Scope3
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test

internal class KtorRepositoryTest {


	private val ktorRepository = KtorRepository("95f4b5790e3d55cee1f6badeb192c9a1")

	@Test
	fun getList() = runBlocking{
		val list = ktorRepository.getList<Request>()

		list.response.results.forEach {
			println(it)
//			val getOne = ktorRepository.getOne<SupportedValue>(it._id!!)
//			println(getOne)
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

	@Test
	fun getRequest(): Unit = runBlocking {
		val request = ktorRepository.getOne<Request>("1633678038538x673914045626318800", "Request").response
		ktorRepository.updateObject(request._id!!, request)
		println(request)
	}

//	@Test
//	fun test(): Unit = runBlocking {
//		val requestId = "1633612321219x665281861109153800"
//		val entryId =
//
//		val request = ktorRepository.getOne<Request>(requestId).response
//		request.entry = entryId
//		ktorRepository.updateObject(requestId, request)
//	}

	@Test
	fun sendDraft(): Unit = runBlocking {
		val requestId = "1633612321219x665281861109153800"
		val request = ktorRepository.getOne<Request>(requestId).response
		val registry = request.registry

		// ENTRY
		val entry = Entry(
			_id = null,
			request = requestId,
			value = "100",
			status = "Pending",
			registry = registry,
			refDateFrom = "2021-01-01T11:00:00.000Z",
			refDateTo = "2021-12-31T11:00:00.000Z",
		)
		val result = ktorRepository.saveObject(entry)
		val entryId = result.id

		// REQUEST
		request.entry = entryId
		ktorRepository.updateObject(requestId, request)

		// SCOPES
		val scope1 = SupportedValue(
			_id = null,
			entry = entryId,
			label = "Scope 1",
			requirement = Scope1.identifier,
			value = "20"
		)

		val scope2 = SupportedValue(
			_id = null,
			entry = entryId,
			label = "Scope 2",
			requirement = Scope2.identifier,
			value = "30"
		)

		val scope3 = SupportedValue(
			_id = null,
			entry = entryId,
			label = "Scope 3",
			requirement = Scope3.identifier,
			value = "50"
		)
		ktorRepository.saveObject(scope1)
		ktorRepository.saveObject(scope2)
		ktorRepository.saveObject(scope3)
	}
}

/**
 * Scope 3 = 1631745764693x799770971892103800
 * scope 2 = 1631745725079x715449360344731600
 * scope 1 = 1631745628421x226481125220847400
 */