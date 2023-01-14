package com.drotsakura.animalaid.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.FeedBack;
import com.drotsakura.animalaid.service.FeedBackService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/feedback")
public class FeedBackController {
    @Resource
    private FeedBackService feedBackService;

    @RequestMapping("/save")
    public Result add(@RequestBody FeedBack feedBack){
        String content = feedBack.getContent();
        if (content.length()>50 || content.length()<5){
            return Result.fail("反馈内容有误");
        }

        System.out.println(LocalDateTime.now());
        /* feedBack.setCreateTime();  时间转换*/
        feedBack.setUserId(BaseContext.getId());

        if (!feedBackService.save(feedBack)) return Result.ok("反馈添加失败");

        return Result.ok("反馈添加成功");
    }
}
