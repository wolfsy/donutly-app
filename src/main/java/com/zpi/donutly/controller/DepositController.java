package com.zpi.donutly.controller;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/deposit")
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

    // FIXME: naprawić addDeposit
    // dodawanie noewego depozytu
    @PostMapping("/add/{username}")
    public ResponseEntity<?> addDeposit(@PathVariable String username, @RequestBody Deposit deposit) {
        Deposit addedDeposit = depositService.addDeposit(username, deposit);
        if (addedDeposit == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(addedDeposit);
    }

    // pobranie wszystkich depozytów dla id danego użytkownika
    @GetMapping("/all/{userId}")
    public ResponseEntity<?> getAllDepositsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(depositService.getAllDepositsByUserId(userId));
    }

}
