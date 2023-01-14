package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("tb_feedback")
public class FeedBack implements Serializable {
    private Long id;
    private String content;
    private LocalDateTime createTime;
    private Long userId;
}
