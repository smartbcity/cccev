package features

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.data.mongodb.config.EnableMongoAuditing
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories
import org.springframework.scheduling.annotation.EnableScheduling

@EnableScheduling
@EntityScan("cccev")
@EnableMongoAuditing
@EnableReactiveMongoRepositories("cccev")
@SpringBootApplication(scanBasePackages = ["cccev, features"])
open class TestApplication
