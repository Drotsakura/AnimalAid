package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("tb_image")
public class Image implements Serializable {
    private Long id;
    private Integer type;
    private String nativeUrl;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
