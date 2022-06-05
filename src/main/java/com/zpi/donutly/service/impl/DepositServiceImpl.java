package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.Deposit;
import com.zpi.donutly.model.User;
import com.zpi.donutly.model.UserRole;
import com.zpi.donutly.repository.DepositRepository;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.DepositService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        deposit.setUser(user);
        deposit.setTime(LocalDateTime.now());
        return depositRepository.save(deposit);
    }

    @Override
    public Optional<Deposit> setDepositVisibility(Long depositId) {
        Optional<Deposit> optionalDeposit = depositRepository.findById(depositId);

        if (optionalDeposit.isEmpty()) {
            return Optional.empty();
        }

        Deposit deposit = optionalDeposit.get();
        deposit.setVisibility(!deposit.getVisibility());
        depositRepository.save(deposit);
        return Optional.of(deposit);
    }

    @Override
    public List<Deposit> getAllDepositsByUserId(Long userId) {
        return depositRepository.findAllByUserIdOrderByTimeDesc(userId);
    }

    @Override
    public List<Deposit> getDepositsForRoleByUserId(String username, Long userId) {
        User user = userRepository.findUserByLogin(username).orElse(null);

        if (user != null && user.getRole() == UserRole.ADMIN) {
            return depositRepository.findAllByUserIdOrderByTimeDesc(userId);
        }
        return depositRepository.findAllByUserIdAndVisibilityIsTrueOrderByTimeDesc(userId);
    }

}
