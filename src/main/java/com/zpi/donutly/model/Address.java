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
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Addresses")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_address")
    private Long id;

    @NotBlank(message = "Field 'street' cannot be null.")
    @Length(max = 40, message = "Field 'street' shouldn't be greater than 40 signs.")
    @Column(name = "street")
    private String street;

    @NotBlank(message = "Field 'number' cannot be null.")
    @Length(max = 10, message = "Field 'street' shouldn't be greater than 10 signs.")
    @Column(name = "number")
    private String number;

    @NotBlank(message = "Field 'city' cannot be null.")
    @Length(max = 40, message = "Field 'city' shouldn't be greater than 40 signs.")
    @Column(name = "city")
    private String city;

    @NotBlank(message = "Field 'zipCode' cannot be null.")
    @Length(max = 10, message = "Field 'street' shouldn't be greater than 10 signs.")
    @Column(name = "zip_code")
    private String zipCode;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Address address = (Address) o;
        return id != null && Objects.equals(id, address.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
