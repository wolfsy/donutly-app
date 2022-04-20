package com.zpi.donutly.service;

import com.zpi.donutly.model.Payment;


public interface PaymentService {
    Payment getPaymentByUserId(Long id);
}
