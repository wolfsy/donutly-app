package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.net.URL;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long id;

    @NotBlank(message = "Field 'firstName' cannot be null.")
    @Length(max = 30, message = "Field 'firstName' shouldn't be greater than 30 signs.")
    @Column(name = "first_name")
    private String firstName;

    @NotBlank(message = "Field 'lastName' cannot be null.")
    @Length(max = 50, message = "Field 'lastName' shouldn't be greater than 50 signs.")
    @Column(name = "last_name")
    private String lastName;

    @NotBlank(message = "Field 'login' cannot be null.")
    @Length(max = 100, message = "Field 'login' shouldn't be greater than 100 signs.")
    @Column(name = "login")
    private String login;

    @Length(max = 500, message = "Field 'profileDescription' shouldn't be greater than 500 signs.")
    @Column(name = "profile_description")
    private String profileDescription;

    @Email
    @Column(name = "email")
    private String email;

    @NotBlank(message = "Field 'password' cannot be null.")
    @Length(min = 8, max = 60, message = "Field 'password' should be between 8 and 60 signs.")
    @Column(name = "password")
    private String password;

    @NotBlank(message = "Field 'phone' cannot be null.")
    @Length(max = 30, message = "Field 'phone' shouldn't be greater than 30 signs.")
    @Column(name = "phone")
    private String phone;

    @Column(name = "account_number")
    private String accountNumber;

    @NotBlank(message = "Field 'status' cannot be null.")
    @Column(name = "status")
    private Boolean status;

    // role: 1 - user, 2 - admin
    @NotBlank(message = "Field 'role' cannot be null.")
    @Column(name = "role")
    private Integer role;

    @Column(name = "avatar_url")
    private URL avatarUrl;

    @NotBlank(message = "Field 'verification' cannot be null.")
    @Column(name = "verification")
    private Boolean verification;

    @Column(name = "instagram_url")
    private URL instagramUrl;

    @Column(name = "youtube_url")
    private URL youtubeUrl;

    @Column(name = "tiktok_url")
    private URL tiktokUrl;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_address")
    private Address address;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<Deposit> depositList;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<Payment> paymentList;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return id != null && Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
