package com.zpi.donutly.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.UUID;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EmailVerificationToken {

    @Id
    @GeneratedValue
    UUID token;

    @OneToOne
    User user;
}
