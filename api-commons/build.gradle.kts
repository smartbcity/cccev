plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
}

dependencies {
    Dependencies.Jvm.coroutines.forEach(::api)
    Dependencies.Jvm.s2Mongo.forEach(::api)
}
