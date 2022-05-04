package com.zpi.donutly.service.impl;

import com.zpi.donutly.handler.InvalidEmailTokenException;
import com.zpi.donutly.model.EmailVerificationToken;
import com.zpi.donutly.model.User;
import com.zpi.donutly.model.UserRole;
import com.zpi.donutly.repository.EmailVerificationRepository;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.EmailVerificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmailVerificationServiceImpl implements EmailVerificationService {

    private final EmailVerificationRepository emailVerificationRepository;
    private final UserRepository userRepository;
    private final JavaMailSender javaMailSender;

    @Override
    public void verifyUserEmailAddress(UUID token) throws InvalidEmailTokenException {
        EmailVerificationToken emailVerificationToken = emailVerificationRepository.findByToken(token)
                .orElseThrow(InvalidEmailTokenException::new);
        User user = emailVerificationToken.getUser();

        if (user.isEnabled()) {
            throw new InvalidEmailTokenException();
        }

        user.setVerification(true);
        user.setRole(UserRole.USER);
        userRepository.save(user);
    }

    public EmailVerificationToken createVerificationToken(User user) {
        return emailVerificationRepository.save(new EmailVerificationToken(null, user));
    }

    @Override
    public void sendEmail(User user) throws NullPointerException, MailException {
        EmailVerificationToken token = emailVerificationRepository.findByUser(user)
                .orElseThrow(NullPointerException::new);
        String confirmUrlLink = "http://localhost:8080/api/verification/" + token.getToken();

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("noreply.donutly@gmail.com");
        simpleMailMessage.setTo(user.getEmail());
        simpleMailMessage.setSubject("Welcome to Donutly " + user.getUsername() + "! Verification link passing.");
        simpleMailMessage.setText("Click the link to confirm address verification: " + confirmUrlLink);
        javaMailSender.send(simpleMailMessage);
    }
}
