package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Payments")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Payment {
    @Id
    @Column(name = "id_payment")
    private Long id;

    @NotBlank(message = "Field 'paymentBalance' cannot be null.")
    @Column(name = "payment_balance")
    private Double paymentBalance;

    @NotBlank(message = "Field 'lastWithdraw' cannot be null.")
    @Column(name = "last_withdraw")
    private LocalDateTime lastWithdraw;

    @NotBlank(message = "Field 'totalPaymentBalance' cannot be null.")
    @Column(name = "total_payment_balance")
    private Double totalPaymentBalance;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Payment payment = (Payment) o;
        return id != null && Objects.equals(id, payment.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }


}
