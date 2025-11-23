package com.alligator.controller;

import com.alligator.pojo.Result;
import com.alligator.pojo.Tool1;
import com.alligator.service.Tool1Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/tool1")
@RestController
public class Tool1Controller {
    @Autowired
    private Tool1Service tool1Service;

    @GetMapping()
    public Result list() {
        log.info("获取 tool1 的所有数据");
        List<Tool1> tool1List = tool1Service.findAll();
        return Result.success(tool1List);
    }

    @GetMapping("/getLast")
    public Result getLast() {
        log.info("获取 tool1 的最新一条数据");
        Tool1 tool1 = tool1Service.getLast();
        return Result.success(tool1);
    }

    @PostMapping
    public Result add(@RequestBody Tool1 tool1) {
        tool1Service.add(tool1);
        log.info("新增 tool1 对象：{}，生成 id：", tool1, tool1.getId());
        return Result.success();
    }
}
