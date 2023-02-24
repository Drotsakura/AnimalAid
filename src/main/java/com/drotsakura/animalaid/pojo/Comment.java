package com.drotsakura.animalaid.pojo;

import lombok.Data;

@Data
public class Comment {
    private Long UserId;
    private String Message;
    private String username;
}
