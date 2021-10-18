plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
}

dependencies {
	api("io.cucumber:cucumber-java8:${Versions.cucumber}")
	api("io.cucumber:cucumber-junit-platform-engine:${Versions.cucumber}")
	api("io.cucumber:cucumber-spring:${Versions.cucumber}")
	Dependencies.Jvm.junit.forEach { api(it) }

	api("org.springframework.boot:spring-boot-starter-test:${PluginVersions.springBoot}")
	api("org.springframework.boot:spring-boot-starter-data-mongodb:${PluginVersions.springBoot}")
	api("org.springframework.boot:spring-boot-starter-web:${PluginVersions.springBoot}")

}
