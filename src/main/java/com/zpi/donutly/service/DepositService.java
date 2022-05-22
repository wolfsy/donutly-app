package com.zpi.donutly.service;

import com.zpi.donutly.model.Deposit;
import java.util.List;

public interface DepositService {

    Deposit editVisibilityById(Long id, boolean visibility);

    Deposit addDeposit(String username, Deposit deposit);

    List<Deposit> getAllDepositsByUserId(Long userId);
}
