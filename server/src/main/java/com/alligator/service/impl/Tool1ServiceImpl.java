package com.alligator.service.impl;

import com.alligator.mapper.Tool1Mapper;
import com.alligator.pojo.Tool1;
import com.alligator.service.Tool1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Tool1ServiceImpl implements Tool1Service {
    @Autowired
    private Tool1Mapper tool1Mapper;

    @Override
    public List<Tool1> findAll() {
        return tool1Mapper.findAll();
    }

    @Override
    public Tool1 getLast() {
        return tool1Mapper.getLast();
    }

    @Override
    public void add(Tool1 tool1) {
        tool1Mapper.add(tool1);
    }
}
