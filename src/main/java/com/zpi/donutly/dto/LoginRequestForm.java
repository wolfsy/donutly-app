package com.zpi.donutly.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public record LoginRequestForm(@NotNull @Email String email,
                               @NotNull String password
) {
}
