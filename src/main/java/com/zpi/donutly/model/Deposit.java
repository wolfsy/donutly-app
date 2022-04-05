package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_deposit")
    private Long id;

    @NotBlank
    @Length(max = 30, message = "Donator name must be less than 30 characters")
    private String donator;

    @NotBlank
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

    @NotBlank
    private LocalDateTime time;

    @Length(max = 500, message = "message must be less than 500 characters")
    private String message;

}
