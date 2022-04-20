package com.zpi.donutly.controller;

import com.zpi.donutly.model.Payment;
import com.zpi.donutly.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPaymentByUserId(@PathVariable Long id) {
        return ResponseEntity.ok(paymentService.getPaymentByUserId(id));
    }
}
