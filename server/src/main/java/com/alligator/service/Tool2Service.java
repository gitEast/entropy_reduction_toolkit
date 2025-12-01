package com.alligator.service;

import com.alligator.pojo.Tool2;

import java.util.List;

public interface Tool2Service {
    /** 查询所有 */
    List<Tool2> getAllRecords();

    /** 插入一条记录 */
    Tool2 addRecord(Tool2 tool2);
}
