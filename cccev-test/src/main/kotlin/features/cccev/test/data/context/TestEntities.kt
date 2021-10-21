package features.cccev.test.data.context

class TestEntities<ID: Any, ENTITY> {
    private val mutableEntities = mutableMapOf<ID, ENTITY>()

    val entities: Map<ID, ENTITY>
        get() = mutableEntities.toMap()

    var lastCreated: ID? = null
        private set

    operator fun get(id: ID) = mutableEntities[id]

    operator fun set(id: ID, entity: ENTITY) {
        mutableEntities[id] = entity
        lastCreated = id
    }

    fun putAll(vararg entries: Pair<ID, ENTITY>) {
        entries.forEach { (id, entity) -> set(id, entity) }
    }

    fun putAll(from: Map<ID, ENTITY>) {
        from.forEach { (id, entity) -> set(id, entity) }
    }
}
