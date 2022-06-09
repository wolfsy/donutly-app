package com.zpi.donutly.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.zpi.donutly.dto.*;
import com.zpi.donutly.model.*;
import com.zpi.donutly.repository.AddressRepository;
import com.zpi.donutly.repository.EmailVerificationRepository;
import com.zpi.donutly.repository.PaymentRepository;
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

    private final AddressRepository addressRepository;
    private final PaymentRepository paymentRepository;
    private final EmailVerificationService emailVerificationService;
    private final EmailVerificationRepository emailVerificationRepository;

    @Override
    public Optional<User> getUserByLogin(String login) {
        return userRepository.findUserByLogin(login).or(Optional::empty);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElse(null);
    }

    @Override
    public Optional<User> getUserByLoginForRole(String login, String currentUserLogin) {
        Optional<User> user = userRepository.findUserByLogin(login).or(Optional::empty);
        Optional<User> currentUser = userRepository.findUserByLogin(currentUserLogin).or(Optional::empty);

        if (user.isPresent() && !user.get().getStatus()) {
            return user;
        } else if (user.isPresent() && currentUser.isPresent() && currentUser.get().getRole() == UserRole.ADMIN) {
            return user;
        }
        return Optional.empty();
    }

    @Override
    public UserInfo getUserInfo(String username, String currentUserLogin) {
        User user = userRepository.findUserByLogin(username).orElse(null);
        User currentUser = userRepository.findUserByLogin(currentUserLogin).orElse(null);

        if (user == null || currentUser == null || currentUser.getRole() != UserRole.ADMIN) {
            return null;
        }

        Address address = user.getAddress();
        if (address == null) {
            return null;
        }

        Payment payment = user.getPayment();
        if (payment == null) {
            return null;
        }

        UserInfo userInfo = new UserInfo();
        userInfo.setEmail(user.getEmail());
        userInfo.setCurrentUserBalance(payment.getPaymentBalance());
        userInfo.setLastWithdrawRequest(payment.getLastWithdraw());
        userInfo.setBankAccountNumber(user.getAccountNumber());
        userInfo.setPhoneNumber(user.getPhone());
        userInfo.setStreet(address.getStreet());
        userInfo.setBuildingNumber(address.getNumber());
        userInfo.setCity(address.getCity());
        userInfo.setZipCode(address.getZipCode());

        return userInfo;
    }

    @Override
    public UserProfileInfo getUserProfileInfo(String username) {
        User user = userRepository.findUserByLogin(username).orElse(null);

        if (user == null) {
            return null;
        }

        Payment payment = user.getPayment();
        Address address = user.getAddress();

        return new UserProfileInfo(
                payment != null ? payment.getTotalPaymentBalance() : null,
                payment != null ? payment.getPaymentBalance() : null,
                payment != null ? payment.getLastWithdraw() : null,
                user.getAccountNumber(),
                user.getPhone(),
                user.getAvatarUrl(),
                user.getLogin(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getProfileDescription(),
                user.getCategory() != null ? user.getCategory().getId() : null,
                user.getCategory() != null ? user.getCategory().getName() : null,
                user.getStatus(),
                user.getEmailVerification(),
                user.getAdminVerification(),
                user.getInstagramUrl(),
                user.getYoutubeUrl(),
                user.getTiktokUrl(),
                address != null ? address.getStreet() : null,
                address != null ? address.getNumber() : null,
                address != null ? address.getCity() : null,
                address != null ? address.getZipCode() : null
        );
    }

    @Override
    public boolean updateUserAccountBankNumber(String userLogin, String bankNumber) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || bankNumber == null) {
            return false;
        }

        currentUser.setAccountNumber(bankNumber);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountPhoneNumber(String userLogin, String phoneNumber) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || phoneNumber == null) {
            return false;
        }

        currentUser.setPhone(phoneNumber);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountAddress(String userLogin, AddressChangeForm addressForm) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || addressForm == null) {
            return false;
        }

        Address newAddress = Address.builder()
                .id(currentUser.getId())
                .street(addressForm.street())
                .number(addressForm.number())
                .zipCode(addressForm.zipCode())
                .city(addressForm.city())
                .build();


        currentUser.setAddress(newAddress);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountInstagram(String userLogin, String instagramUrl) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || instagramUrl == null) {
            return false;
        }

        currentUser.setInstagramUrl(instagramUrl);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountYoutube(String userLogin, String youtubeUrl) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || youtubeUrl == null) {
            return false;
        }

        currentUser.setYoutubeUrl(youtubeUrl);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountTiktok(String userLogin, String tiktokUrl) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || tiktokUrl == null) {
            return false;
        }

        currentUser.setTiktokUrl(tiktokUrl);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountAvatar(String userLogin, String avatarUrl) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || avatarUrl == null) {
            return false;
        }

        currentUser.setAvatarUrl(avatarUrl);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountProfileDescription(String userLogin, String description) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || description == null) {
            return false;
        }

        currentUser.setProfileDescription(description);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountProfileLogin(String userLogin, String login) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || login == null) {
            return false;
        }

        currentUser.setLogin(login);
        userRepository.save(currentUser);
        return true;
    }

    @Override
    public boolean updateUserAccountProfilePassword(String userLogin, PasswordChangeForm passwordChangeForm) {
        User currentUser = userRepository.findUserByLogin(userLogin).orElse(null);

        if (currentUser == null || passwordChangeForm == null ||
                !passwordEncoder.matches(passwordChangeForm.oldPassword(), currentUser.getPassword())) {
            return false;
        }

        String newUserPassword = passwordEncoder.encode(passwordChangeForm.newPassword());
        currentUser.setPassword(newUserPassword);
        userRepository.save(currentUser);
        return true;
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
                null, new Address(addressRepository.count() + 1, null, null, null, null), null , null,
                new Payment(paymentRepository.count() + 1, 0.00, LocalDateTime.now(), 0.00));
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

    @Override
    public boolean userIsBlocked(String email) {
        User user = userRepository.findUserByEmail(email).orElse(null);
        if (user != null) {
            return !user.isAccountNonLocked();
        }
        return false;
    }

    @Override
    public List<User> getUsersByCategoryIdForRole(Long categoryId, String login) {
        User user = userRepository.findUserByLogin(login).orElse(null);
        if (user != null && user.getRole().equals(UserRole.ADMIN)) {
            return userRepository.findUsersByCategoryId(categoryId);
        }
        return userRepository.findUsersByCategoryIdAndStatusIsFalse(categoryId);
    }
}
