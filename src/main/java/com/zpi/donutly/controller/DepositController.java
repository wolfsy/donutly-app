package com.zpi.donutly.controller;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/deposit")
@RequiredArgsConstructor
public class DepositController {
    private final DepositService depositService;

    // zmiana widoczności. "visibility" = true - widoczny dla wszystkich, false - widoczny tylko dla admina
    @PatchMapping("/visibility/{id}/{visibility}")
    public ResponseEntity<?> editVisibilityById(@PathVariable Long id, @PathVariable Boolean visibility) {
        Deposit updatedDeposit = depositService.editVisibilityById(id, visibility);
        if (updatedDeposit == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedDeposit);
    }

    // pobranie wszystkich depozytów dla id danego użytkownika
    @GetMapping("/all/{userId}")
    public ResponseEntity<?> getAllDepositsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(depositService.getAllDepositsByUserId(userId));
    }

    // wstawienie nowego depozytu do bazy danych (zapis do tabeli deposits)
    @PostMapping("/add/{userId}")
    public ResponseEntity<Deposit> addDeposit(@PathVariable Long userId, @Valid @RequestBody Deposit deposit) {
        return ResponseEntity.ok(depositService.addDeposit(userId, deposit));
    }

    // ustawienie depozytu na ukryty - blokada wiadomosci naruszajacej regulamin
    @PutMapping("/hide/{depositId}")
    public ResponseEntity<Deposit> hideDeposit(@PathVariable Long depositId) {
        return ResponseEntity.of(depositService.setDepositVisibility(depositId));
    }
}
