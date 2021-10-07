package cccev.gateway

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource

@Configuration
class WebSecurityConfig {

    @Bean
    fun springSecurityFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
        http.authorizeExchange().anyExchange().permitAll()
        http.corsConfig()
        http.csrf().disable()
        http.corsConfig()
        return http.build()
    }

    private fun ServerHttpSecurity.corsConfig() {
        val config = CorsConfiguration()
        config.allowedOrigins = listOf("*")
        config.allowCredentials = false
        config.addAllowedMethod("*")
        config.addAllowedHeader("*")

        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration("/**", config)
        cors().configurationSource(source)
    }
}
