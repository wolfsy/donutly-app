package com.zpi.donutly.repository;

import com.zpi.donutly.model.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepositRepository extends JpaRepository<Deposit, Long> {

    Deposit findDepositById(Long id);

    Deposit findFirstIdByOrderByIdDesc();
}
