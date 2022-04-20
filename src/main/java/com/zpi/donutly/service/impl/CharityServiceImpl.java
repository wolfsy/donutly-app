package com.zpi.donutly.service.impl;

import com.zpi.donutly.model.Charity;
import com.zpi.donutly.repository.CharityRepository;
import com.zpi.donutly.service.CharityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class CharityServiceImpl implements CharityService {
    private final CharityRepository charityRepository;

    @Override
    public Charity getActiveCharity() {
        return charityRepository.findCharityByIsActiveIsTrue();
    }
}
