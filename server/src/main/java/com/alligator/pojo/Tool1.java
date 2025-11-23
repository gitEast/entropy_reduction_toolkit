package com.alligator.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tool1 {
    private BigInteger id;
    private String detail;
    private Integer total;
    private Integer mainEnclosure; // 主维度：封闭程度
    private Integer mainResistance; // 主维度：做功阻力
    private Float fiveEnclosure; // 五向熵维：封闭性
    private Float fiveEquilibrium; // 五向熵维：平衡性
    private Float fiveLinear; // 五向熵维：高线性
    private Float fiveDisorder; // 五向熵维：内心失序
    private Float fiveLoss; // 五向熵维：能量失焦
    private Float userId; // 用户 id，如果没有登录的话，则没有
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createAt; // 创建时间
}
