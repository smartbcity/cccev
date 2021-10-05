package cccev.gateway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["cccev"])
class CccevApplication

fun main(args: Array<String>) {
	runApplication<CccevApplication>(*args)
}
