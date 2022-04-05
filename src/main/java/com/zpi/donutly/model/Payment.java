package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_payment")
    private Long id;

    @NotBlank(message = "Field 'paymentBalance' cannot be null.")
    private Double paymentBalance;

    @NotBlank(message = "Field 'lastWithdraw' cannot be null.")
    private LocalDateTime lastWithdraw;
}
