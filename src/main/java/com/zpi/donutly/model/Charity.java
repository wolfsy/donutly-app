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
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Charities")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Charity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_charity")
    private Long id;

    @NotBlank(message = "Field 'title' cannot be null.")
    @Length(max = 50, message = "Field 'title' shouldn't be greater than 50 signs.")
    @Column(name = "title")
    private String title;

    @NotBlank(message = "Field 'description' cannot be null.")
    @Length(max = 300, message = "Field 'description' shouldn't be greater than 300 signs.")
    @Column(name = "description")
    private String description;

    @Column(name = "picture_url")
    private String pictureUrl;

    @NotBlank(message = "Field 'startTime' cannot be null.")
    @Column(name = "start_time")
    private LocalDateTime startTime;

    @NotBlank(message = "Field 'name' cannot be null.")
    @Column(name = "end_time")
    private LocalDateTime endTime;

    @NotBlank(message = "Field 'isActive' cannot be null.")
    @Column(name = "is_active")
    private Boolean isActive;

    @NotBlank(message = "Field 'charityBalance' cannot be null.")
    @Column(name = "charity_balance")
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
