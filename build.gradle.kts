plugins {
	id("city.smartb.fixers.gradle.config") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.sonar") version PluginVersions.fixers
}

allprojects {
	group = "city.smartb.prototyping"
	version = System.getenv("VERSION") ?: "latest"
	repositories {
		mavenCentral()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
	}
}

fixers {
	bundle {
		id = "ccev-cee"
		name = "CCEV CEE"
		description = "Kotlin implementation of Core Criterion and Core Evidence Vocabulary for cee fiche"
		url = "https://gitlab.smartb.city/prototyping/cccev-cee"
	}
}
