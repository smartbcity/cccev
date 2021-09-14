pluginManagement {
	repositories {
		gradlePluginPortal()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
	}
}

rootProject.name = "cccev-cee"

include(
	"cccev-dsl:cccev-dsl-core",
	"cccev-dsl:cccev-dsl-cee"
)
