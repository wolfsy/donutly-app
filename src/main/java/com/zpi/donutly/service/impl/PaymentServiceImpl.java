package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.Payment;
import com.zpi.donutly.model.User;
import com.zpi.donutly.repository.PaymentRepository;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.PaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    @Override
    public Payment getPaymentByUserId(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null && user.getPayment() != null) {
            Long repositoryId = user.getPayment().getId();
            return paymentRepository.findById(repositoryId).orElse(null);
        }
        return null;
    }
}
