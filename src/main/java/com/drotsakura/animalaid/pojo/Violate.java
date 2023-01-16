package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("tb_violate")
public class Violate {
    private Long id;
    private LocalDateTime createTime;
    private LocalDateTime endTime;
    private Long userId;
}
