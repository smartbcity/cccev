package cccev.bubble.core

sealed interface ObjType

typealias EntryId = String

@Suppress("ConstructorParameterNaming")
data class Entry(
	val _id: EntryId?,
	val suportedValues: String? = null,
	val refDateTo: String? = null,
	val refDateFrom: String? = null,
	val request: String,
	val indicator: String? = "1630948766274x174537303374628700",
	val organization: String? = null,
	val trustability: String? = "50", // TODO
	val value: String,
	val status: String,
	val owner: String? = null,
	val registry: String?
): ObjType

@Suppress("ConstructorParameterNaming")
data class Request(
//	val _id: String?,
	val organizationRequesting: String? = null,
	val requestedEmail: String? = null,
	val status: String = "Request sent",
	val registry: String?,
	var entry: String?
)

typealias SupportedValueId = String
typealias RequirementId = String

@Suppress("ConstructorParameterNaming")
data class SupportedValue(
	val _id: SupportedValueId?,
	/**
	 * The unique id of the entry.
	 * @example "1633526615552x703979258083541000"
	 */
	val entry: EntryId,
	/**
	 * The url to the evidence file.
	 */
	val evidence: String? = null,
	/**
	 * The label of the information concept.
	 */
	val label: String,

	/**
	 * The id of the requirement.
	 */
	val requirement: RequirementId,
	/**
	 * The value of the supported value.
	 */
	val value: String? = null,
	/**
	 * The information string of the supported value.
	 */
	val information: String? = null,

//	val status: String,

): ObjType
