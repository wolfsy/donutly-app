package com.zpi.donutly.controller;

import com.zpi.donutly.dto.*;
import com.zpi.donutly.model.Address;
import com.zpi.donutly.model.Category;
import com.zpi.donutly.model.User;
import com.zpi.donutly.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        if (userService.userIsBlocked(requestForm.email())) {
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

    @GetMapping(value = "/details")
    public ResponseEntity<User> getUser() {
        String emailAddress = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        User user = userService.getUserByEmail(emailAddress);
        return ResponseEntity.ok(user);
    }

    // wyświetlenie pojedynczego użytkownika po nazwie dla dalej roli (wnioskowanej na podstweir loginu)
    @GetMapping(value = "/{login}/{currentUserLogin}")
    public ResponseEntity<User> getUserByLoginForRole(@PathVariable String login, @PathVariable String currentUserLogin) {
        return ResponseEntity.of(userService.getUserByLoginForRole(login, currentUserLogin));
    }

    // wyświetlenie listy wszystkich użytkowników
    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> usersList = userService.getAllUsers();
        return ResponseEntity.ok(usersList);
    }

    // wyświetlenie listy użytkowników do danej kategorii
    @GetMapping(value = "/users/{categoryId}/all")
    public ResponseEntity<List<User>> getAllUsersByCategoryId(@PathVariable Long categoryId) {
        List<User> userList = userService.getAllUsersByCategoryId(categoryId);
        return ResponseEntity.ok(userList);
    }

    // wyświetlanie listy użytkowników niezablokowwanych do danej kategorii z wyłaczeniem adminów
    @GetMapping(value = "/users/{categoryId}")
    public ResponseEntity<List<User>> getUsersByCategoryIdNonBlocked(@PathVariable Long categoryId) {
        List<User> userList = userService.getUsersByCategoryIdNonBlocked(categoryId);
        return ResponseEntity.ok(userList);
    }

    // wyświetlanie listy użytkowników do danej kategorii w zależności od roli podanego użytkownika
    @GetMapping(value = "/users/{categoryId}/{login}")
    public ResponseEntity<List<User>> getUsersByCategoryIdForRole(@PathVariable Long categoryId, @PathVariable String login) {
        List<User> userList = userService.getUsersByCategoryIdForRole(categoryId, login);
        return ResponseEntity.ok(userList);
    }

    // edycja hasła użytkownika
    @PatchMapping(value = "/password")
    public ResponseEntity<User> editUserPassword(@RequestBody User user) {
        User currentUser = userService.editUserPassword(user);
        if (currentUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(currentUser);
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
    @PatchMapping(value = "/status/{userId}")
    public ResponseEntity<User> editUserStatus(@PathVariable Long userId) {
        User newUser = userService.editUserStatus(userId);
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

    @PatchMapping(value = "/account/banknumber")
    public ResponseEntity<Void> updateUserAccountBankNumber(@RequestBody String accountNumber) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountBankNumber(userLogin, accountNumber) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PatchMapping(value = "/account/phonenumber")
    public ResponseEntity<Void> updateUserAccountPhoneNumber(@RequestBody String phoneNumber) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountPhoneNumber(userLogin, phoneNumber) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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

    // wyświetlenie informacji o użytkowniku dla admina
    @GetMapping(value = "/info/{username}/{currentUserLogin}")
    public ResponseEntity<UserInfo> getUserInfo(@PathVariable String username, @PathVariable String currentUserLogin) {
        UserInfo userInfo = userService.getUserInfo(username, currentUserLogin);
        if (userInfo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userInfo);
    }

    // wyświetlenie informacji o użytkowniku w profilu użytkownika
    @GetMapping(value = "/info/{username}")
    public ResponseEntity<UserProfileInfo> getUserInfoForUser(@PathVariable String username) {
        UserProfileInfo userProfileInfo = userService.getUserProfileInfo(username);
        if (userProfileInfo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userProfileInfo);
    }
}
