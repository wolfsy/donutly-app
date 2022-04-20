package com.zpi.donutly.repository;

import com.zpi.donutly.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findPaymentByUser_Id(Long id);
}
