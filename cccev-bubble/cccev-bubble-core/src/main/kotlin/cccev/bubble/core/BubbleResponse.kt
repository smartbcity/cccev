package cccev.bubble.core

data class BubbleCreateResponse(
	val status: String,
	val id: String

)

data class BubbleResponse<T>(
	val response: T

)

data class BubbleListResult<T>(
	val cursor: Int,
	val results: List<T>
)
