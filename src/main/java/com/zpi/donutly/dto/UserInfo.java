package com.zpi.donutly.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserInfo {
    private String email;
    private Double currentUserBalance;
    private LocalDateTime lastWithdrawRequest;
    private String bankAccountNumber;
    private String phoneNumber;
    private String street;
    private String buildingNumber;
    private String city;
    private String zipCode;
}
