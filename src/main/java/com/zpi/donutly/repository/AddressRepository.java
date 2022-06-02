package com.zpi.donutly.repository;

import com.zpi.donutly.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    Address findAddressById(Long id);
}

