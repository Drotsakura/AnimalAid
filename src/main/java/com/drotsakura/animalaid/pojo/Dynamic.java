package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("tb_dynamic")
public class Dynamic implements Serializable {
    private Long id;
    private String title;
    private String feature;
    private String content;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer type;
    private Long userid;
    private Long animalId;
    private Long imageId;
}
