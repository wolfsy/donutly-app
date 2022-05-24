package com.zpi.donutly.service;

import com.zpi.donutly.model.Deposit;

import java.util.List;
import java.util.Optional;

public interface DepositService {

    Deposit editVisibilityById(Long id, boolean visibility);

    Deposit addDeposit(Long userId, Deposit deposit);

    Optional<Deposit> setDepositVisibility(Long depositId);

    List<Deposit> getAllDepositsByUserId(Long userId);
}
