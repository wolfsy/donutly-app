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
import java.util.Optional;

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

    @Override
    public Deposit addDeposit(Long userId, Deposit deposit) {
        User user = userRepository.findUserById(userId);
        deposit.setId(depositRepository.count() + 1);
        user.getDepositList().add(deposit);
        return depositRepository.save(deposit);
    }

    @Override
    public Optional<Deposit> hideDeposit(Long depositId) {
        Optional<Deposit> optionalDeposit = depositRepository.findById(depositId);

        if (optionalDeposit.isEmpty()) {
            return Optional.empty();
        }

        Deposit deposit = optionalDeposit.get();
        deposit.setVisibility(false);
        return Optional.of(deposit);
    }

    @Override
    public List<Deposit> getAllDepositsByUserId(Long userId) {
        return depositRepository.findAllByUserId(userId);
    }
}
