package com.zpi.donutly.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.zpi.donutly.dto.LoginRequestForm;
import com.zpi.donutly.dto.RegistrationRequest;
import com.zpi.donutly.model.Address;
import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;
import com.zpi.donutly.model.UserRole;
import com.zpi.donutly.repository.EmailVerificationRepository;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.EmailVerificationService;
import com.zpi.donutly.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final Algorithm jwtAlgorithm;
    private final UserRepository userRepository;
    private final EmailVerificationService emailVerificationService;
    private final EmailVerificationRepository emailVerificationRepository;

    @Override
    public Optional<User> getUserByLogin(String login) {
        return userRepository.findUserByLogin(login).or(Optional::empty);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getAllUsersByCategoryId(Long categoryId) {
        return userRepository.findUsersByCategoryId(categoryId);
    }

    @Override
    public List<User> getUsersByCategoryIdNonBlocked(Long categoryId) {
        return userRepository.findUsersByCategoryIdAndStatusIsFalse(categoryId);
    }

    @Override
    public User addUser(User user) {
        return null;
    }

    @Override
    public User editUserPassword(User user) {
        return null;
    }

    @Override
    public User editUserDescription(User user) {
        return null;
    }

    @Override
    public User editUserAvatar(User user) {
        return null;
    }

    @Override
    public User editUserStatus(Long userId) {
        User user = userRepository.findUserById(userId);
        if (user != null) {
            user.setStatus(!user.getStatus());
            userRepository.save(user);
            return user;
        }
        return null;
    }

    @Override
    public User editUserAddress(String username, Address address) {
        return null;
    }

    @Override
    public Address getUserAddress(String username) {
        return null;
    }

    @Override
    public Category getUserCategory(String username) {
        return null;
    }

    //TODO: do poprawy
/*
    @Override
    public User editUserPassword(User user) {
        String login = user.getLogin();
        Optional<User> userToEdit = userRepository.findUserByLogin(login);

        if(userToEdit.isEmpty()) return Optional.empty();
        if (userToEdit.isPresent()) {
            String password = user.getPassword();
            userToEdit.setPassword(password);
            userRepository.save(userToEdit);
            return userToEdit;
        }
        return null;
    }

    @Override
    public User editUserDescription(User user) {
        String login = user.getLogin();
        User userToEdit = userRepository.findUserByLogin(login);

        if (userToEdit != null) {
            String description = user.getProfileDescription();
            userToEdit.setProfileDescription(description);
            userRepository.save(userToEdit);
            return userToEdit;
        }
        return null;
    }

    @Override
    public User editUserAvatar(User user) {
        String login = user.getLogin();
        User userToEdit = userRepository.findUserByLogin(login);

        if (userToEdit != null) {
            URL avatar = user.getAvatarUrl();
            userToEdit.setAvatarUrl(avatar);
            userRepository.save(userToEdit);
            return userToEdit;
        }
        return null;
    }

    @Override
    public User editUserStatus(User user) {
        String login = user.getLogin();
        User userToEdit = userRepository.findUserByLogin(login);

        if (userToEdit != null) {
            Boolean status = user.getStatus();
            userToEdit.setStatus(status);
            userRepository.save(userToEdit);
            return userToEdit;
        }
        return null;
    }

    @Override
    public User editUserAddress(String username, Address address) {
        User userToEdit = userRepository.findUserByLogin(username);

        if (userToEdit != null) {
            address.setId(userToEdit.getAddress().getId());
            userToEdit.setAddress(address);
            userRepository.save(userToEdit);
            return userToEdit;
        }
        return null;
    }

    @Override
    public Address getUserAddress(String username) {
        User user = userRepository.findUserByLogin(username);
        if (user != null) {
            return user.getAddress();
        }
        return null;
    }

    @Override
    public Category getUserCategory(String username) {
        Optional<User> user = userRepository.findUserByLogin(username);
        if (user.isPresent()) {
            return user.getCategory();
        }
        return null;
    }
*/

    @Override
    public boolean loginAlreadyExists(String login) {
        return userRepository.findUserByLogin(login).isPresent();
    }

    @Override
    public boolean emailAlreadyExists(String email) {
        return userRepository.findUserByEmail(email).isPresent();
    }

    @Override
    public boolean userVerificationConfirmed(String email) {
        return Objects.requireNonNull(userRepository.findUserByEmail(email).orElse(null)).isEnabled();
    }

    @Override
    public Optional<User> createUserAccount(RegistrationRequest request) {
        User user = new User(userRepository.count() + 1, request.firstName(), request.lastName(), request.login(), null,
                request.email(), passwordEncoder.encode(request.password()), null, null,
                false, UserRole.USER, "https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?fit=256%2C256&ssl=1",
                false, false, null, null,
                null, null, null, null, null);
        user = userRepository.save(user);

        try {
            emailVerificationService.createVerificationToken(user);
            emailVerificationService.sendEmail(user);
            return Optional.of(user);
        } catch (NullPointerException nullPointerException) {
            log.error(nullPointerException.getMessage());
            emailVerificationRepository.findByUser(user).ifPresent(emailVerificationRepository::delete);
            userRepository.delete(user);
            return Optional.empty();
        }
    }

    @Override
    public Optional<String> generateAccessToken(LoginRequestForm requestForm) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(requestForm.email(), requestForm.password()));

            User user = (User) authentication.getPrincipal();
            String token = JWT.create()
                    .withExpiresAt(Date.from(LocalDateTime.now().plusDays(5).atZone(ZoneId.systemDefault()).toInstant()))
                    .withIssuedAt(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()))
                    .withClaim("name", user.getLogin())
                    .withClaim("role", user.getRole().toString())
                    .sign(jwtAlgorithm);

            return Optional.of(token);
        } catch (Exception exception) {
            log.error("Failed login operation with: " + requestForm.email());
            return Optional.empty();
        }
    }
}
