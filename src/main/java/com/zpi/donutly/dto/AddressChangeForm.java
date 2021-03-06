package com.zpi.donutly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AddressChangeForm(@JsonProperty("street") String street,
                                @JsonProperty("number") String number,
                                @JsonProperty("city") String city,
                                @JsonProperty("zipCode") String zipCode) {
}
