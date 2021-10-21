plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(":api-commons"))
    api(project(":cccev-dsl:cccev-dsl-cee"))
    api(project(":cccev-dsl:cccev-dsl-cc"))
    api(project(":cccev-dsl:cccev-dsl-dto"))
    api(project(":cccev-s2:request:request-app"))

    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")

    testImplementation(project(":cccev-test"))
}
