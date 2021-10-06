plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
}

dependencies {
    commonMainApi(project(":cccev-dsl:cccev-dsl-core"))

    commonMainApi("city.smartb.f2:f2-dsl-cqrs:${Versions.f2}")
    commonMainApi("city.smartb.f2:f2-dsl-function:${Versions.f2}")
}
