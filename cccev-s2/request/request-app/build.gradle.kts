plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	api(project(":cccev-s2:request:request-domain"))
	api(project(":cccev-dsl:cccev-dsl-core"))

	api(project(":cccev-bubble:cccev-bubble-core"))

	Dependencies.Jvm.s2Mongo.forEach { api(it) }
}
