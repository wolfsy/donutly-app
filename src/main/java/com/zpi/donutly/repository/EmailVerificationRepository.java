package com.zpi.donutly.repository;

import com.zpi.donutly.model.EmailVerificationToken;
import com.zpi.donutly.model.User;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;

public interface EmailVerificationRepository extends Repository<EmailVerificationToken, UUID> {

    Optional<EmailVerificationToken> findByToken(UUID token);

    EmailVerificationToken save(EmailVerificationToken token);

    Optional<EmailVerificationToken> findByUser(User user);

    void delete(EmailVerificationToken token);
}
