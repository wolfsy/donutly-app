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
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Deposits")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Deposit {
    @Id
    @Column(name = "id_deposit")
    private Long id;

    @NotBlank(message = "Field 'donator' cannot be null.")
    @Length(max = 50, message = "Field 'donator' shouldn't be greater than 50 signs.")
    @Column(name = "donator")
    private String donator;

    @NotBlank(message = "Field 'amount' cannot be null.")
    @Column(name = "amount")
    private Double amount;

    @NotBlank(message = "Field 'time' cannot be null.")
    @Column(name = "time")
    private LocalDateTime time;

    @Length(max = 500, message = "Field 'message' shouldn't be greater than 500 signs.")
    @Column(name = "message")
    private String message;

    @NotBlank(message = "Field 'visibility' cannot be null.")
    @Column(name = "visibility")
    private Boolean visibility;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Deposit deposit = (Deposit) o;
        return id != null && Objects.equals(id, deposit.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
