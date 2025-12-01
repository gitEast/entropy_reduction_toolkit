package com.alligator.service.impl;

import com.alligator.mapper.Tool2Mapper;
import com.alligator.pojo.Tool2;
import com.alligator.service.Tool2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Tool2ServiceImpl implements Tool2Service {
    @Autowired
    private Tool2Mapper tool2Mapper;

    @Override
    public List<Tool2> getAllRecords() {
        return tool2Mapper.findAll();
    }

    @Override
    public Tool2 addRecord(Tool2 tool2) {
        if (tool2.getFeeling() != null && tool2.getFeeling().length() > 10) {
            throw new IllegalArgumentException("Feeling 字段长度不能超过 10 个字符");
        }
        tool2Mapper.insert(tool2);
        return tool2;
    }
}
