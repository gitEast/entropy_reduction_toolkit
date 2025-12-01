package com.alligator.controller;

import com.alligator.pojo.Result;
import com.alligator.pojo.Tool2;
import com.alligator.service.Tool2Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequestMapping("/tool2")
@RestController
public class Tool2Controller {
    @Autowired
    private Tool2Service tool2Service;

    @GetMapping()
    public Result getAll() {
        List<Tool2> records = tool2Service.getAllRecords();
        return Result.success(records);
    }

    @PostMapping()
    public Result add(@RequestBody Tool2 tool2) {
        tool2Service.addRecord(tool2);
        log.info("新增 tool2 对象: {}，生成 id: {}", tool2, tool2.getId());
        return Result.success(tool2.getId());
    }
}
