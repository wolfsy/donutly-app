package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Income {
    @NotBlank(message = "Field 'totalBalance' cannot be null.")
    private Double totalBalance;
}
