package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.model.User;
import com.zpi.donutly.repository.DepositRepository;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class DepositServiceImpl implements DepositService {

    private final DepositRepository depositRepository;
    private final UserRepository userRepository;

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

    //FIXME: naprawić addDeposit
    @Override
    public Deposit addDeposit(Long userId, Deposit deposit) {
        User user = userRepository.findUserById(userId);
        if (user != null) {
            deposit.setUser(user);
            return depositRepository.save(deposit);
        }
        return null;
    }

    @Override
    public List<Deposit> getAllDepositsByUserId(Long userId) {
        return depositRepository.findAllByUserId(userId);
    }
}
