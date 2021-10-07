plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {

    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
    Dependencies.Jvm.ktorClient(::implementation)
    testImplementation(project(":cccev-test"))
}
