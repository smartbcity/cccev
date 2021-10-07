plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
}

dependencies {
	commonMainApi(project(":cccev-dsl:cccev-dsl-core"))

	commonMainApi("city.smartb.s2:s2-dsl-automate:${Versions.s2}")
	commonMainApi("city.smartb.s2:s2-dsl-automate:${Versions.s2}")
}
