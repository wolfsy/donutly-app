package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Data
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private Long id;

    @NotBlank(message = "Field 'name' cannot be null.")
    @Length(max = 30, message = "Field 'name' shouldn't be greater than 30 signs.")
    private String name;

    @NotBlank(message = "Field 'iconUrl' cannot be null.")
    @Length(max = 255, message = "Field 'name' shouldn't be greater than 30 signs.")
    private String iconUrl;
}
