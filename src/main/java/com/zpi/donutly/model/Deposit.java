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
@Table(name = "Deposit")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_deposit")
    private Long id;

    @NotBlank(message = "Field 'donator' cannot be null.")
    @Length(max = 50, message = "Field 'donator' shouldn't be greater than 50 signs.")
    private String donator;

    @NotBlank(message = "Field 'amount' cannot be null.")
    private Double amount;

    // virtual field our_pay that is calculated as amount * 0.01
    @Transient
    private Double ourPay;

    // virtual field charity_pay that is calculated as amount * 0.01
    @Transient
    private Double charityPay;

    // virtual field user_pay that is calculated as amount * 0.98
    @Transient
    private Double userPay;

    @NotBlank(message = "Field 'time' cannot be null.")
    private LocalDateTime time;

    @Length(max = 500, message = "Field 'message' shouldn't be greater than 500 signs.")
    private String message;

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
