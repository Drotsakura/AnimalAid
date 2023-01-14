package com.drotsakura.animalaid.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Boolean isSucceed;
    private String errorMsg;
    private Object  data;

    public static Result ok(Object data){
        return new Result(true,null,data);
    }

    public static Result fail(String errorMsg){
        return new Result(false,errorMsg,null);
    }
}
