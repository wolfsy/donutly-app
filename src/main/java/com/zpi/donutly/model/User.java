package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import javax.persistence.*;

@Data
@Entity
public class User {
    @Id
    // auto-increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long id;

    @NotBlank(message = "first name cannot be empty")
    @Length(max = 30, message = "first name can't be longer than 30 characters")
    private String firstName;

    @NotBlank(message = "last name cannot be empty")
    @Length(max = 50, message = "last name can't be longer than 50 characters")
    private String lastName;

    @NotBlank(message = "email cannot be empty")
    @Length(max = 50, message = "email can't be longer than 50 characters")
    private String email;

    @NotBlank(message = "password cannot be empty")
    @Length(min = 8, max = 50, message = "password must be between 8 and 50 characters")
    private String password;

    @NotBlank(message = "phone number cannot be empty")
    @Length(max = 30, message = "phone number can't be longer than 30 characters")
    private String phone;

    // role: 1 - user, 2 - admin
    @NotBlank(message = "role cannot be empty")
    private Integer role;

    @Length(max = 255, message = "avatarUrl can't be longer than 255 characters")
    private String avatarUrl;

    @NotBlank(message = "verification code cannot be empty")
    private Boolean verification;

    @Length(max = 255, message = "instagramUrl can't be longer than 255 characters")
    private String instagramUrl;

    @Length(max = 255, message = "youtubeUrl can't be longer than 255 characters")
    private String youtubeUrl;

    @Length(max = 255, message = "tiktokUrl can't be longer than 255 characters")
    private String tiktokUrl;


}
