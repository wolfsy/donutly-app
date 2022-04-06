package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Charity")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Charity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_charity")
    private Long id;

    @NotBlank(message = "Field 'title' cannot be null.")
    @Length(max = 50, message = "Field 'title' shouldn't be greater than 50 signs.")
    private String title;

    @NotBlank(message = "Field 'description' cannot be null.")
    @Length(max = 300, message = "Field 'description' shouldn't be greater than 300 signs.")
    private String description;

    private URL pictureUrl;

    @NotBlank(message = "Field 'startTime' cannot be null.")
    private LocalDateTime startTime;

    @NotBlank(message = "Field 'name' cannot be null.")
    private LocalDateTime endTime;

    @NotBlank(message = "Field 'charityBalance' cannot be null.")
    private Double charityBalance;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Charity charity = (Charity) o;
        return id != null && Objects.equals(id, charity.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
