package com.drotsakura.animalaid.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("tb_user")
public class User implements Serializable {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String address;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer grade;
    private Integer type;
    private Long imageId;
    private Integer state;
}
