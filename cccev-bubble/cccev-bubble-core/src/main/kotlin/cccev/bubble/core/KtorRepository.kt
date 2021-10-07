package cccev.bubble.core

import com.fasterxml.jackson.annotation.JsonAutoDetect
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.PropertyAccessor
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.features.defaultRequest
import io.ktor.client.features.json.JacksonSerializer
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.http.ContentType
import io.ktor.http.contentType

class KtorRepository(
	val bearerToken: String
) {

	companion object {
		fun baseUrl(typename: String) = "https://impactmate.earth/version-test/api/1.1/obj/${typename}"

		fun client(bearerToken: String) = HttpClient(CIO) {
			install(JsonFeature) {
				serializer = JacksonSerializer() {
					configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
					setSerializationInclusion(JsonInclude.Include.NON_NULL)
					setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY)
					registerModule(KotlinModule())
				}
			}
			defaultRequest {
				header("Authorization", "Bearer $bearerToken")
				header("Accept", "application/json")
			}
		}
	}

	suspend inline fun <reified T> getList(
	): BubbleResponse<BubbleListResult<T>> {

		return client(bearerToken).get(baseUrl(T::class.java.simpleName))
	}

	suspend inline fun <reified T> getOne(
		id: String
	): BubbleResponse<T> {
		return client(bearerToken).get(baseUrl("${T::class.simpleName!!}/${id}"))
	}

	suspend inline fun <reified T: Any> saveObject(
		obj: T,
	): BubbleCreateResponse {
		return client(bearerToken).post(baseUrl(T::class.simpleName!!)) {
			contentType(ContentType.Application.Json)
			body = obj
		}
	}

}
