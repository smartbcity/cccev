plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
}

dependencies {
    implementation(project(":cccev-dsl:cccev-dsl-cee"))
    implementation("com.fasterxml.jackson.core:jackson-databind:${Versions.jackson}")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:${Versions.jackson}")

    testRuntimeOnly("org.jetbrains.kotlin:kotlin-main-kts:1.5.0")
    testRuntimeOnly("org.jetbrains.kotlin:kotlin-scripting-jsr223:1.5.0")
}
