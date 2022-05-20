package com.zpi.donutly.repository;

import com.zpi.donutly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findUsersByCategoryId(Long categoryId);

    Optional<User> findUserByLogin(String login);

    List<User> findUsersByLoginContaining(String login);

    Optional<User> findUserByEmail(String email);
}
