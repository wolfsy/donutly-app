package com.zpi.donutly.service;

import com.zpi.donutly.model.Address;
import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;

import java.util.List;

public interface UserService {

    User getUserByLogin(String login);

    List<User> getAllUsers();

    List<User> getAllUsersByCategoryId(Long categoryId);

    User addUser(User user);

    User editUserPassword(User user);

    User editUserDescription(User user);

    User editUserAvatar(User user);

    User editUserStatus(User user);

    User editUserAddress(String username, Address address);

    Address getUserAddress(String username);

    Category getUserCategory(String username);
}
