package com.example.departmentservice;

import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@OpenAPIDefinition(
        info = @Info(
                title = "Department Service REST APIs",
                description = "Department Service REST APIs Documentation",
                version = "v1.0",
                contact = @Contact(
                        name = "Nabil",
                        email = "nabil.nadzor@gmail.com",
                        url = "https://github.com/n1bil"
                ),
                license = @License(
                        name = "Apache 2.0",
                        url = "https://github.com/n1bil"
                )
        ),
        externalDocs = @ExternalDocumentation(
                description = "Department-Service Doc",
                url = "https://github.com/n1bil"
        )
)

@SpringBootApplication
public class  DepartmentServiceApplication {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(DepartmentServiceApplication.class, args);
    }

}
