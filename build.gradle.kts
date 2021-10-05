plugins {
	id("city.smartb.fixers.gradle.config") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.sonar") version PluginVersions.fixers

	id("org.springframework.boot") version PluginVersions.springBoot apply false
	id("io.spring.dependency-management") version "1.0.10.RELEASE" apply false

	kotlin("jvm") version PluginVersions.kotlin apply false
	kotlin("plugin.spring") version PluginVersions.kotlin apply false
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

tasks {
	register("cleanTsGen", Delete::class) {
		delete("web/kotlin")
	}

	register("tsGen", Copy::class) {
		dependsOn("cleanTsGen")
		from("${this.project.buildDir.absolutePath}/js/packages/") {
			exclude("*-test")
		}
		into("web/kotlin")
		includeEmptyDirs = false
	}
}
