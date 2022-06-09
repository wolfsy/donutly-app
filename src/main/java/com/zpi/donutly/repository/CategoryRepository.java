package com.zpi.donutly.repository;

import com.zpi.donutly.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category>  findCategoryById(Long id);
    Optional<Category> findCategoryByName(String name);
}
