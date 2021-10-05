pluginManagement {
	repositories {
		gradlePluginPortal()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
	}
}

rootProject.name = "cccev-cee"

include(
	"cccev-dsl:cccev-dsl-cc",
	"cccev-dsl:cccev-dsl-cee",
	"cccev-dsl:cccev-dsl-core",
	"cccev-dsl:cccev-dsl-dto",
)
include(
	"api-gateway",
	"cccev-api",
	"cccev-f2",
	"cccev-test"
)
include(
	"proto"
)
