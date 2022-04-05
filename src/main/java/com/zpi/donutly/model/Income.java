package com.zpi.donutly.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Income {
    @NotBlank(message = "Field 'totalBalance' cannot be null.")
    private Double totalBalance;
}
