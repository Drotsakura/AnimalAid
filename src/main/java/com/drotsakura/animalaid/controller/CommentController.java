package com.drotsakura.animalaid.controller;

import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.service.CommentService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Resource
    private CommentService commentService;

    @GetMapping("/dynamicComment")
    public Result getDynamicComment(Long id){
        return commentService.getDynamicComment(id);
    }

    @PostMapping("/addDynamicComment")
    public Result addDynamicComment(Long id,String message){
        return commentService.addDynamicComment(id,message);
    }
}
