package com.drotsakura.animalaid.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice(annotations = {RestController.class, Controller.class})
@ResponseBody
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    public Result exceptionHandler(Exception e){
        e.printStackTrace();
        return Result.fail("未知错误");

    }
}
