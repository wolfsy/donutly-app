package com.zpi.donutly.service;

import com.zpi.donutly.model.Deposit;

import java.util.List;
import java.util.Optional;

public interface DepositService {

    Deposit editVisibilityById(Long id, boolean visibility);

    Deposit addDeposit(Long depositId, Deposit deposit);

    Optional<Deposit> hideDeposit(Long depositId);

    List<Deposit> getAllDepositsByUserId(Long userId);
}
