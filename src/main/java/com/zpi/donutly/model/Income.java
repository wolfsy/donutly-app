package com.zpi.donutly.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "Incomes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Income {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Field 'totalBalance' cannot be null.")
    @Column(name = "total_balance")
    private Double totalBalance;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Income income = (Income) o;
        return id != null && Objects.equals(id, income.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
