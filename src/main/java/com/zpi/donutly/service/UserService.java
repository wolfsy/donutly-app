package com.zpi.donutly.service;

import com.zpi.donutly.model.User;

import java.util.List;

public interface UserService {

    User getUserByLogin(String login);

    List<User> getAllUsers();

    List<User> getAllUsersByCategoryId(Long categoryId);
}
