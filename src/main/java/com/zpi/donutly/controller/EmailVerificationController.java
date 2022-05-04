package com.zpi.donutly.controller;

import com.zpi.donutly.handler.InvalidEmailTokenException;
import com.zpi.donutly.service.EmailVerificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/verification")
public class EmailVerificationController {

    private final EmailVerificationService emailVerificationService;

    @GetMapping(value = "/{token}")
    public ResponseEntity<String> verifyEmail(@PathVariable UUID token) {
        try {
            emailVerificationService.verifyUserEmailAddress(token);
            return ResponseEntity.ok("Your account has been verified!\n " +
                    "You might close the window safely.");
        } catch (InvalidEmailTokenException invalidEmailTokenException) {
            return ResponseEntity.badRequest().body("");
        }
    }
}
