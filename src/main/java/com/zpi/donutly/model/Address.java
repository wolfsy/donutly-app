package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_address")
    private Long id;

    @NotBlank(message = "Field 'street' cannot be null.")
    @Length(max = 40, message = "Field 'street' shouldn't be greater than 40 signs.")
    private String street;

    @NotBlank(message = "Field 'number' cannot be null.")
    @Length(max = 10, message = "Field 'street' shouldn't be greater than 10 signs.")
    private String number;

    @NotBlank(message = "Field 'city' cannot be null.")
    @Length(max = 40, message = "Field 'city' shouldn't be greater than 40 signs.")
    private String city;

    @NotBlank(message = "Field 'zipCode' cannot be null.")
    @Length(max = 10, message = "Field 'street' shouldn't be greater than 10 signs.")
    private String zipCode;
}
