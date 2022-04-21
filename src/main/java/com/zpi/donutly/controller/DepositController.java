package com.zpi.donutly.controller;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deposit")
@RequiredArgsConstructor
public class DepositController {
    private final DepositService depositService;

    // zmiana widoczności. "visibility" = true - widoczny dla wszystkich, false - widoczny tylko dla admina
    @PatchMapping("/visibility/{id}/{visibility}")
    public ResponseEntity<?> editVisibilityById(@PathVariable Long id, @PathVariable Boolean visibility) {
        Deposit updatedDeposit =  depositService.editVisibilityById(id, visibility);
        if (updatedDeposit == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedDeposit);
    }

}
