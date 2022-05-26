package com.zpi.donutly.controller;

import com.zpi.donutly.model.Payment;
import com.zpi.donutly.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @GetMapping("/{userId}")
    public ResponseEntity<Payment> getPaymentByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(paymentService.getPaymentByUserId(userId));
    }
}
