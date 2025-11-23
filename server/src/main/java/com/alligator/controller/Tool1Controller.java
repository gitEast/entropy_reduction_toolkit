package com.alligator.controller;

import com.alligator.pojo.Result;
import com.alligator.pojo.Tool1;
import com.alligator.service.Tool1Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/tool1")
@RestController
public class Tool1Controller {
    @Autowired
    private Tool1Service tool1Service;

    @GetMapping("/getLast")
    public Result getLast() {
        log.info("获取 tool1 的最新一条数据");
        Tool1 tool1 = tool1Service.getLast();
        return Result.success(tool1);
    }

}
