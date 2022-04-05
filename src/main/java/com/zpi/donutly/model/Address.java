package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Field 'street' cannot be null.")
    private String street;
    private String number;
    private String city;
    private String zipCode;
}
