plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api ("org.springframework.boot:spring-boot-starter-security:2.1.3.RELEASE")
    api("city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}")
    implementation(project(":cccev-api"))
    implementation(project(":cccev-s2:request:request-app"))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "smartbcity/cccev-gateway:${this.project.version}"
}
