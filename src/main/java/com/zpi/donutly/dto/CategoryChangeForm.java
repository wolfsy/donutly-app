package com.zpi.donutly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CategoryChangeForm(@JsonProperty("id") Long idCategory) {
}
