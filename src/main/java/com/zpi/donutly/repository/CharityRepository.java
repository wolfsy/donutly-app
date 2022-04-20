package com.zpi.donutly.repository;

import com.zpi.donutly.model.Charity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharityRepository extends JpaRepository<Charity, Long> {

    Charity findCharityByIsActiveIsTrue();
}
