package com.zpi.donutly.repository;

import com.zpi.donutly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByLogin(String login);

    List<User> findUsersByCategoryId(Long categoryId);
}
