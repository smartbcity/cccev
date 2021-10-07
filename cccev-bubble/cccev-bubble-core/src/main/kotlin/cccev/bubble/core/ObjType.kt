package cccev.bubble.core

sealed interface ObjType {

}

typealias EntryId = String

data class Entry(
	val _id: EntryId,
	val suportedValues: String?,
	val refDateTo: String,
	val refDateFrom: String,
	val request: String,
	val indicator: String,
	val organization: String,
	val trustability: String,
	val value: String,
	val status: String,
	val owner: String
): ObjType

typealias SupportedValueId = String
typealias RequiremenetId = String

data class SupportedValue(
	val _id: SupportedValueId?,
	/**
	 * The unique id of the entry.
	 * @example "1633526615552x703979258083541000"
	 */
	val entry: EntryId? = null,
	/**
	 * The url to the evidence file.
	 */
	val evidence: String? = null,
	/**
	 * The label of the supported evidence.
	*/
	val label: String? = null,

	/**
	 * The id of the requirement.
	 */
	val requirement: RequiremenetId? = null,
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