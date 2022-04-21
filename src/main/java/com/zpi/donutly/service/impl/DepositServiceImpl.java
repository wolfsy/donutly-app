package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.repository.DepositRepository;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class DepositServiceImpl implements DepositService {

    private final DepositRepository depositRepository;

    @Override
    public Deposit editVisibilityById(Long id, boolean visibility) {
        Deposit depositToEdit = depositRepository.findDepositById(id);

        if (depositToEdit != null) {
            depositToEdit.setVisibility(visibility);
            depositRepository.save(depositToEdit);
            return depositToEdit;
        }
        return null;
    }
}
