plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":cccev-dsl:cccev-dsl-cee"))
    api(project(":cccev-dsl:cccev-dsl-cc"))
    api(project(":cccev-dsl:cccev-dsl-dto"))

    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")

    testImplementation(project(":cccev-test"))
}
