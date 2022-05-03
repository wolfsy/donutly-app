package com.zpi.donutly.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public record RegistrationRequest(
        @NotBlank @Length(max = 30) String firstName,
        @NotBlank @Length(max = 50) String lastName,
        @NotBlank @Length(max = 100) String login,
        @NotBlank @Email String email,
        @NotBlank @Length(min = 8, max = 60) String password,
        @NotBlank @Size(min = 8, max = 60) String repeatedPassword
) {
}
