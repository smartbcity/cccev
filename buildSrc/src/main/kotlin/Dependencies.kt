import org.gradle.api.artifacts.Dependency

object PluginVersions {
	const val kotlin = "1.6.20-M1"
	const val fixers = "experimental-SNAPSHOT"
	const val springBoot = "2.5.3"
}

object Versions {
	const val s2 = "experimental-SNAPSHOT"
	const val f2 = "experimental-SNAPSHOT"

	const val ktor = "1.6.3"
	const val coroutines = "1.6.0"
	const val jackson = "2.13.0"

	const val junit = "5.7.0"
	const val junitPlateform = "1.8.1"
	const val assertj = "3.15.0"

	const val cucumber = "7.0.0"
}

object Dependencies {
	object Jvm {
		val s2Mongo = arrayOf(
			"city.smartb.s2:s2-spring-boot-starter-automate:${Versions.s2}",
			"city.smartb.s2:s2-spring-boot-starter-automate-data:${Versions.s2}",
			"city.smartb.f2:f2-spring-data-mongodb:${Versions.f2}",
			"city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}"
		)

		fun ktorClient(scope: Scope) = scope.add(
			"io.ktor:ktor-client-core:${Versions.ktor}",
			"io.ktor:ktor-client-cio:${Versions.ktor}",
			"io.ktor:ktor-client-jackson:${Versions.ktor}"
		)

		val junit = arrayOf(
			"org.junit.jupiter:junit-jupiter:${Versions.junit}",
			"org.junit.jupiter:junit-jupiter-api:${Versions.junit}",
			"org.junit.platform:junit-platform-suite:${Versions.junitPlateform}",
			"org.assertj:assertj-core:${Versions.assertj}"
		)

		val coroutines = arrayOf(
			"org.jetbrains.kotlinx:kotlinx-coroutines-core:${Versions.coroutines}",
			"org.jetbrains.kotlinx:kotlinx-coroutines-reactor:${Versions.coroutines}",
			"org.jetbrains.kotlinx:kotlinx-coroutines-reactive:${Versions.coroutines}",
			"org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:${Versions.coroutines}"
		)
	}
}


typealias Scope = (dependencyNotation: Any) -> Dependency?

fun Scope.add(vararg deps: String): Scope {
	deps.forEach { this(it) }
	return this
}