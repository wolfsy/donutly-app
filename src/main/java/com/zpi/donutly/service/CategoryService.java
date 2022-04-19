package com.zpi.donutly.service;

import com.zpi.donutly.model.Category;

import java.util.List;

public interface CategoryService {
    Category getCategoryByName(String name);

    List<Category> getAllCategories();
}
