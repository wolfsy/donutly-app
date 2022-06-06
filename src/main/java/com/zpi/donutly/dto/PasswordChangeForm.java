package com.zpi.donutly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PasswordChangeForm(@JsonProperty("oldPassword") String oldPassword,
                                 @JsonProperty("newPassword") String newPassword,
                                 @JsonProperty("repeatedNewPassword") String repeatedNewPassword) {
}
