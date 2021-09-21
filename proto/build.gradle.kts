plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
}

dependencies {
    implementation(project(":cccev-dsl:cccev-dsl-cee"))
    implementation("com.fasterxml.jackson.core:jackson-databind:2.11.1")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.12.5")
}
