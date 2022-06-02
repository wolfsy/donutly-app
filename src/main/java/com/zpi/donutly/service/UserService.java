package com.zpi.donutly.service;

import com.zpi.donutly.dto.LoginRequestForm;
import com.zpi.donutly.dto.RegistrationRequest;
import com.zpi.donutly.model.Address;
import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;
import com.zpi.donutly.model.UserInfo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    Optional<User> getUserByLogin(String login);

    List<User> getAllUsers();

    List<User> getAllUsersByCategoryId(Long categoryId);

    List<User> getUsersByCategoryIdNonBlocked(Long categoryId);

    User addUser(User user);

    User editUserPassword(User user);

    User editUserDescription(User user);

    User editUserAvatar(User user);

    User editUserStatus(Long userId);

    User editUserAddress(String username, Address address);

    Address getUserAddress(String username);

    Category getUserCategory(String username);

    boolean loginAlreadyExists(String login);

    boolean emailAlreadyExists(String email);

    boolean userVerificationConfirmed(String email);

    Optional<User> createUserAccount(RegistrationRequest request);

    Optional<String> generateAccessToken(LoginRequestForm requestForm);

    boolean userIsBlocked(String email);

    List<User> getUsersByCategoryIdForRole(Long categoryId, String login);

    Optional<User> getUserByLoginForRole(String login, String currentUserLogin);

    UserInfo getUserInfo(String username, String currentUserLogin);
}
