package com.alligator.mapper;

import com.alligator.pojo.Tool1;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface Tool1Mapper {
    Tool1 getLast();
}
