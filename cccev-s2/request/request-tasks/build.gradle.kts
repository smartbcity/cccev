plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	implementation(project(":api-commons"))
	implementation(project(":cccev-f2"))
	implementation(project(":cccev-s2:request:request-app"))

	runtimeOnly("org.jetbrains.kotlin:kotlin-main-kts:${PluginVersions.kotlin}")
	runtimeOnly("org.jetbrains.kotlin:kotlin-scripting-jsr223:${PluginVersions.kotlin}")

	testImplementation(project(":cccev-test"))
	testImplementation(project(":cccev-f2"))
	testImplementation(project(":cccev-s2:request:request-app"))

	testImplementation("org.awaitility:awaitility:3.0.0")
}
