plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
}

dependencies {
    api(project(":cccev-dsl:cccev-dsl-core"))

    api("org.springframework.boot:spring-boot-starter-data-mongodb:2.5.5")
    implementation("org.hibernate:hibernate-core:5.4.20.Final")
}
