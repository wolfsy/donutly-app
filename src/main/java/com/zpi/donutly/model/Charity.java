package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.net.URL;
import java.time.LocalDateTime;

@Data
@Entity
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
}
