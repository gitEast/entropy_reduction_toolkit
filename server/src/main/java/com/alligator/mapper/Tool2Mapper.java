package com.alligator.mapper;

import com.alligator.pojo.Tool2;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Tool2Mapper {
    /** 查询所有 */
    List<Tool2> findAll();

    /**
     * 新增
     * @param tool2
     * @return 影响的行数（通常为 1）
     */
    int insert(Tool2 tool2);
}
