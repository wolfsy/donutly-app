package com.zpi.donutly.controller;

import com.zpi.donutly.dto.*;
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

    // edycja statusu zablokowania - "status" = true - zablokowany, "status" = false - odblokowany
    @PatchMapping(value = "/status/{userId}")
    public ResponseEntity<User> editUserStatus(@PathVariable Long userId) {
        User newUser = userService.editUserStatus(userId);
        if (newUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(newUser);
    }

    // modyfikowanie numeru karty kredytowej klienta
    @PatchMapping(value = "/account/banknumber")
    public ResponseEntity<Void> updateUserAccountBankNumber(@RequestBody String accountNumber) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountBankNumber(userLogin, accountNumber) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikowanie numeru telefonu klienta
    @PatchMapping(value = "/account/phonenumber")
    public ResponseEntity<Void> updateUserAccountPhoneNumber(@RequestBody String phoneNumber) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountPhoneNumber(userLogin, phoneNumber) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja adresu korespondencyjnego klienta
    @PatchMapping(value = "/account/address")
    public ResponseEntity<Void> updateUserAccountAddress(@RequestBody AddressChangeForm addressForm) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountAddress(userLogin, addressForm) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja obecnej ilosci pieniedzy uzytkownika i czasu wyplaty
    @PatchMapping(value = "/account/withdraw")
    public ResponseEntity<Void> updateUserAccountBalanceAndLastWithdraw() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountBalanceAndLastWithdraw(userLogin) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja linku do domeny internetowej instagram
    @PatchMapping(value = "/account/instagram")
    public ResponseEntity<Void> updateUserAccountInstagram(@RequestBody String instagramUrl) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountInstagram(userLogin, instagramUrl) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja linku do domeny internetowej youtube
    @PatchMapping(value = "/account/youtube")
    public ResponseEntity<Void> updateUserAccountYoutube(@RequestBody String youtubeUrl) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountYoutube(userLogin, youtubeUrl) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja linku do domeny internetowej tiktok
    @PatchMapping(value = "/account/tiktok")
    public ResponseEntity<Void> updateUserAccountTiktok(@RequestBody String tiktokUrl) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountTiktok(userLogin, tiktokUrl) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja zdjecia profilu uzytkownika
    @PatchMapping(value = "/account/avatarUrl")
    public ResponseEntity<Void> updateUserAccountAvatar(@RequestBody String avatarUrl) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountAvatar(userLogin, avatarUrl) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    // modyfikacja kategorii uzytkownika
    @PatchMapping(value = "/account/category")
    public ResponseEntity<Void> updateUserAccountCategory(@RequestBody CategoryChangeForm categoryForm) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountCategory(userLogin, categoryForm) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja opisu profilu uzytkownika
    @PatchMapping(value = "/account/description")
    public ResponseEntity<Void> updateUserAccountProfileDescription(@RequestBody String description) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountProfileDescription(userLogin, description) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja loginu uzytkownika
    @PatchMapping(value = "/account/login")
    public ResponseEntity<Void> updateUserAccountLogin(@RequestBody String login) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountProfileLogin(userLogin, login) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    //modyfikacja hasla uzytkownika
    @PatchMapping(value = "/account/password")
    public ResponseEntity<Void> updateUserAccountPassword(@RequestBody PasswordChangeForm passwordChangeForm) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userLogin = userDetails.getUsername();
        return userService.updateUserAccountProfilePassword(userLogin, passwordChangeForm) ?
                new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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
