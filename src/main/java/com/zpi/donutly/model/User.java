package com.zpi.donutly.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import java.net.URL;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long id;

    @NotBlank(message = "Field 'firstName' cannot be null.")
    @Length(max = 30, message = "Field 'firstName' shouldn't be greater than 30 signs.")
    private String firstName;

    @NotBlank(message = "Field 'lastName' cannot be null.")
    @Length(max = 50, message = "Field 'lastName' shouldn't be greater than 50 signs.")
    private String lastName;

    @Email
    private String email;

    @NotBlank(message = "Field 'password' cannot be null.")
    @Length(min = 8, max = 60, message = "Field 'password' shouldn't be lesser than 8 and greater than 60 signs.")
    private String password;

    @NotBlank(message = "Field 'phone' cannot be null.")
    @Length(max = 30, message = "Field 'phone' shouldn't be greater than 30 signs.")
    private String phone;

    // role: 1 - user, 2 - admin
    @NotBlank(message = "Field 'role' cannot be null.")
    private Integer role;

    private URL avatarUrl;

    @NotBlank(message = "Field 'verification' cannot be null.")
    private Boolean verification;

    private URL instagramUrl;

    private URL youtubeUrl;

    private URL tiktokUrl;
}
