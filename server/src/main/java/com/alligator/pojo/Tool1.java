package com.alligator.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tool1 {
    private BigInteger id;
    private String detail;
    private Integer total;
    private Integer mainEnclosure; // 主维度：封闭程度
    private Integer mainResistance; // 主维度：做功阻力
    private Integer fiveEnclosure; // 五向熵维：封闭性
    private Integer fiveEquilibrium; // 五向熵维：平衡性
    private Integer fiveLinear; // 五向熵维：高线性
    private Integer fiveDisorder; // 五向熵维：内心失序
    private Integer fiveLoss; // 五向熵维：能量失焦
    private Integer userId; // 用户 id，如果没有登录的话，则没有
}
