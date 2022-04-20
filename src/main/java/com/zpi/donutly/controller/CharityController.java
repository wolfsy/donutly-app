package com.zpi.donutly.controller;

import com.zpi.donutly.model.Charity;
import com.zpi.donutly.service.CharityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/charity")
@RequiredArgsConstructor
public class CharityController {

    private final CharityService charityService;

    // wyświetlenie charitetu ze statusem is_active = true
    @GetMapping("/active")
    public ResponseEntity<Charity> getActiveCharity() {
        return ResponseEntity.ok(charityService.getActiveCharity());
    }
}
