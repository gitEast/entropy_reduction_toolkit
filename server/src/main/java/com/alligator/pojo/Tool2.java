package com.alligator.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tool2 {
    private BigInteger id;
    private Integer type; // 选择的类型
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date; // 日记选择的日期
    private Integer weather; // 天气，是映射值
    private String cause; // 起因
    private String thought; // 想法，联想
    private String feeling; // 情绪名
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Instant createAt; // 创建时间

}
