package com.zpi.donutly.controller;

import com.zpi.donutly.dto.LoginRequestForm;
import com.zpi.donutly.dto.RegistrationRequest;
import com.zpi.donutly.model.Address;
import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;
import com.zpi.donutly.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // rejestrowanie użytkownika w systemie
    @PostMapping(value = "/register")
    public ResponseEntity<Void> register(@Valid @RequestBody RegistrationRequest request, Errors errorValidation) {
        if (errorValidation.hasErrors() || !request.password().equals(request.repeatedPassword())) {
            return ResponseEntity.badRequest().build();
        }

        if (userService.loginAlreadyExists(request.login()) || userService.emailAlreadyExists(request.email())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        return userService.createUserAccount(request)
                .<ResponseEntity<Void>>map(userAccount -> ResponseEntity.created(URI.create("http://localhost:8080/api/user/"
                        + userAccount.getId())).build())
                .orElse(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    // logowanie do systemu
    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestForm requestForm) {
        if (userService.emailAlreadyExists(requestForm.email()) && !userService.userVerificationConfirmed(requestForm.email())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return userService.generateAccessToken(requestForm)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    // wyświetlenie pojedynczego użytkownika po nazwie
    @GetMapping(value = "/{login}")
    public ResponseEntity<User> getUserByLogin(@PathVariable String login) {
        return ResponseEntity.of(userService.getUserByLogin(login));
    }

    // wyświetlenie listy wszystkich użytkowników
    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> usersList = userService.getAllUsers();
        return ResponseEntity.ok(usersList);
    }

    //TODO: wyświetlenie listy użytkownikow do danej kategorii wylacznie uzytkownikow z rola USER (poprawa)

    // wyświetlenie listy użytkowników do danej kategorii
    @GetMapping(value = "/users/{categoryId}")
    public ResponseEntity<List<User>> getAllUsersByCategoryId(@PathVariable Long categoryId) {
        List<User> userList = userService.getAllUsersByCategoryId(categoryId);
        return ResponseEntity.ok(userList);
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
