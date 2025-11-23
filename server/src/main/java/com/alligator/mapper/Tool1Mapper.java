package com.alligator.mapper;

import com.alligator.pojo.Tool1;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface Tool1Mapper {
    /** 查询所有 */
    List<Tool1> findAll();

    /** 查询最后一条 */
    Tool1 getLast();

    /** 新增 */
    void add(Tool1 tool1);
}
