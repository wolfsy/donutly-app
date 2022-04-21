package com.zpi.donutly.service;

import com.zpi.donutly.model.Deposit;

public interface DepositService {

    Deposit editVisibilityById(Long id, boolean visibility);
}
