package com.zpi.donutly.controller;

import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;
import com.zpi.donutly.model.Address;
import com.zpi.donutly.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // wyświetlenie pojedynczego użytkownika po nazwie
    @GetMapping(value = "/{login}")
    public ResponseEntity<User> getUser(@PathVariable String login) {
        User user = userService.getUserByLogin(login);
        return ResponseEntity.ok(user);
    }

    // wyświetlenie listy wszystkich użytkowników
    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> usersList = userService.getAllUsers();
        return ResponseEntity.ok(usersList);
    }

    // wyświetlenie listy użytkowników do danej kategorii
    @GetMapping(value = "/users/{categoryId}")
    public ResponseEntity<List<User>> getAllUsersByCategoryId(@PathVariable Long categoryId) {
        List<User> userList = userService.getAllUsersByCategoryId(categoryId);
        return ResponseEntity.ok(userList);
    }

    // dodanie nowego użytkownika
    @PostMapping(value = "/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return ResponseEntity.ok(newUser);
    }

    // edycja hasła użytkownika
    @PatchMapping(value = "/password")
    public ResponseEntity<User> editUserPassword(@RequestBody User user) {
        User newUser = userService.editUserPassword(user);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // edycja opisu użytkownika
    @PatchMapping(value = "/description")
    public ResponseEntity<User> editUserDescription(@RequestBody User user) {
        User newUser = userService.editUserDescription(user);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // edycja avataru użytkownika
    @PatchMapping(value = "/avatar")
    public ResponseEntity<User> editUserAvatar(@RequestBody User user) {
        User newUser = userService.editUserAvatar(user);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // edycja statusu zablokowania - "status" = true - zablokowany, "status" = false - odblokowany
    @PatchMapping(value = "/status")
    public ResponseEntity<User> editUserStatus(@RequestBody User user) {
        User newUser = userService.editUserStatus(user);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // edycja adresu zamieszkania użytkownika
    @PatchMapping(value = "/address/{username}")
    public ResponseEntity<User> editUserAddress(@PathVariable String username, @RequestBody Address address) {
        User newUser = userService.editUserAddress(username, address);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // wyświetlenie adresu użytkownika
    @GetMapping(value = "/address/{username}")
    public ResponseEntity<Address> getUserAddress(@PathVariable String username) {
        Address address = userService.getUserAddress(username);
        return ResponseEntity.ok(address);
    }

    // wyświetlenie kategorii użytkownika
    @GetMapping(value = "/category/{username}")
    public ResponseEntity<Category> getUserCategory(@PathVariable String username) {
        Category category = userService.getUserCategory(username);
        return ResponseEntity.ok(category);
    }

}
