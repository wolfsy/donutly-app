package com.zpi.donutly.config.security;

import com.auth0.jwt.algorithms.Algorithm;
import com.zpi.donutly.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.servlet.Filter;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final Filter jwtFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
//                .anyRequest().permitAll().and().csrf().disable().cors()
                .antMatchers("/api/user/**").permitAll()
                .antMatchers("/api/payment/**").permitAll()
                .antMatchers("/api/deposit/**").permitAll()
                .antMatchers("/api/charity/**").permitAll()
                .antMatchers("/api/category/**").permitAll()
                .and()
                .cors()
                .and()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(username -> userRepository.findUserByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(username + " not found")));
        return provider;
    }

    @Bean
    public CorsFilter corsFilter() {

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowCredentials(true);
        corsConfig.addAllowedOrigin("http://localhost:3000");
        corsConfig.addAllowedHeader("*");
        corsConfig.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", corsConfig);
        return new CorsFilter(source);
    }

    @Bean
    public Algorithm jwtAlgorithm() {
        return Algorithm.HMAC256("2JK/C8vRpG9LPHN8058Nx3w5u/CWWjDWqAYCVuILoOU=");
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
