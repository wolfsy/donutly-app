package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_payment")
    private Long id;

    @NotBlank
    private Double p_balance;

    @NotBlank
    private LocalDateTime last_withdraw;


}
