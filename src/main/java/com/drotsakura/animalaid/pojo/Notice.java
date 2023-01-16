package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("tb_notice")
public class Notice {
    private Long id;
    private LocalDateTime createTime;
    private String content;
    private Long userId;
}
