object PluginVersions {
	const val kotlin = "1.5.30"
	const val fixers = "experimental-SNAPSHOT"
	const val springBoot = "2.5.3"
}

object Versions {
	const val f2 = "experimental-SNAPSHOT"

	const val junit = "5.7.0"
	const val junitPlateform = "1.8.1"
	const val assertj = "3.15.0"

	const val cucumber = "6.11.0"
}

object Dependencies {
	object Jvm {
		val junit = arrayOf(
			"org.junit.jupiter:junit-jupiter:${Versions.junit}",
			"org.junit.jupiter:junit-jupiter-api:${Versions.junit}",
			"org.junit.platform:junit-platform-suite:${Versions.junitPlateform}",
			"org.assertj:assertj-core:${Versions.assertj}"
		)
	}
}

//api("io.cucumber:cucumber-java8:${Versions.cucumber}")
//api("io.cucumber:cucumber-junit-platform-engine:${Versions.cucumber}")
//Dependencies.Jvm.junit.forEach { api(it) }