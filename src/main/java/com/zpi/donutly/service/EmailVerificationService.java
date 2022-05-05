package com.zpi.donutly.service;

import com.zpi.donutly.handler.InvalidEmailTokenException;
import com.zpi.donutly.model.EmailVerificationToken;
import com.zpi.donutly.model.User;
import org.springframework.mail.MailException;

import java.util.UUID;

public interface EmailVerificationService {

    void verifyUserEmailAddress(UUID token) throws InvalidEmailTokenException;

    EmailVerificationToken createVerificationToken(User user);

    void sendEmail(User user) throws NullPointerException, MailException;
}
