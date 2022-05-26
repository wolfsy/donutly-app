package com.zpi.donutly.repository;

import com.zpi.donutly.model.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepositRepository extends JpaRepository<Deposit, Long> {

    Deposit findDepositById(Long id);

    Deposit findFirstIdByOrderByIdDesc();

    List<Deposit> findAllByUserIdOrderByTimeDesc(Long userId);

    List<Deposit> findAllByUserIdAndVisibilityIsTrueOrderByTimeDesc(Long userId);
}
