plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
    implementation(project(":cccev-api"))
}

//tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
//    imageName = "proto/cccev-gateway:${this.project.version}"
//}