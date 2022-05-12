package com.zpi.donutly.controller;

import com.zpi.donutly.handler.InvalidEmailTokenException;
import com.zpi.donutly.service.EmailVerificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/verification")
public class EmailVerificationController {

    private final EmailVerificationService emailVerificationService;

    @GetMapping(value = "/{token}")
    public ResponseEntity<String> verifyEmail(@PathVariable UUID token) {
        try {
            emailVerificationService.verifyUserEmailAddress(token);
            return ResponseEntity.ok("""
                       <!DOCTYPE html>
                       <html lang="en">
                       <head>
                           <meta charset="UTF-8">
                           <meta http-equiv="X-UA-Compatible" content="IE=edge">
                           <meta name="viewport" content="width=device-width, initial-scale=1.0">
                           <title>Donutly verification</title>
                       
                           <style>
                               body {
                                   background-color: #fff9f9;
                                   font-family: 'nunito', sans-serif;
                                   color: #130335;
                               }
                       
                               .container{
                                   width: 100%;
                                   height: 100%;
                                   display: flex;
                                   flex-direction: column;
                                   justify-content: center;
                                   align-items: center;
                               }
                       
                               .container h1{
                                   font-size: 2rem;
                                   font-weight: bold;
                               }
                       
                               .info{
                                   width: 100%;
                                   height: 100%;
                                   display: flex;
                                   flex-direction: column;
                                   justify-content: center;
                                   align-items: center;
                                   margin-top: 2rem;
                               }
                       
                               .logo {
                                   display: flex;
                                   flex-direction: column;
                                   justify-content: center;
                                   align-items: center;
                                   margin-top: 4rem;
                       
                               }
                       
                               .logo img{
                                   width: 50%;
                                   height: auto;
                               }
                           </style>
                       </head>
                       <body>
                           <div class="container">
                               <div class="info">
                                   <h1>Your account has been verified properly!</h1>
                                   <h1>You might now close this window safely.</h1>
                               </div>
                               <div class="logo">
                                   <img src="donutly_logo.PNG" alt="Donutly logo">
                               </div>
                           </div>
                       </body>
                       </html>
                    """);
        } catch (InvalidEmailTokenException invalidEmailTokenException) {
            return ResponseEntity.badRequest().body("");
        }
    }
}
