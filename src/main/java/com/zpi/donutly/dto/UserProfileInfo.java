package com.zpi.donutly.dto;

import java.time.LocalDateTime;

public record UserProfileInfo(
        Double totalPaymentBalance,
        Double paymentBalance,
        LocalDateTime lastWithdraw,
        String accountNumber,
        String phone,
        String avatarURL,
        String email,
        String login,
        String firstName,
        String lastName,
        String profileDescription,
        Boolean status,
        Boolean emailVerification,
        Boolean adminVerification,
        String InstagramURL,
        String YouTubeURL,
        String TikTokURL,
        String street,
        String number,
        String city,
        String zipCode
){
}
