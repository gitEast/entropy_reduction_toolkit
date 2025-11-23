package com.alligator.service;

import com.alligator.pojo.Tool1;

import java.util.List;

public interface Tool1Service {
    /** 所有 */
    List<Tool1> findAll();

    /** 查询最近的一条数据 */
    Tool1 getLast();

    /** 新增 */
    void add(Tool1 tool1);
}
