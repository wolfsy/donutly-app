package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Data
@Table(name = "Income")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Income {
    @NotBlank(message = "Field 'totalBalance' cannot be null.")
    private Double totalBalance;
}
