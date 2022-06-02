package com.zpi.donutly.dto;

import javax.validation.constraints.Null;
import java.time.LocalDateTime;

public record UserProfileInfo(
        @Null Double totalPaymentBalance,
        @Null Double paymentBalance,
        @Null LocalDateTime lastWithdraw,
        @Null String accountNumber,
        @Null String phone,
        String avatarURL,
        String login,
        String email,
        String firstName,
        String lastName,
        @Null String profileDescription,
        Boolean status,
        Boolean emailVerification,
        Boolean adminVerification,
        @Null String InstagramURL,
        @Null String YouTubeURL,
        @Null String TikTokURL,
        @Null String street,
        @Null String number,
        @Null String city,
        @Null String zipCode
){
}
