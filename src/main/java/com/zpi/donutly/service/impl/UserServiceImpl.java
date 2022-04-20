package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.User;
import com.zpi.donutly.repository.UserRepository;
import com.zpi.donutly.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getUserByLogin(String login) {
        return userRepository.findUserByLogin(login);
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
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User editUserPassword(User user) {
        String login = user.getLogin();
        User userToEdit = userRepository.findUserByLogin(login);

        if (userToEdit != null) {
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
}
