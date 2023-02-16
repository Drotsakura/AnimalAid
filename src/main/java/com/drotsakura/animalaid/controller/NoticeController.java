package com.drotsakura.animalaid.controller;

import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Notice;
import com.drotsakura.animalaid.service.NoticeService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notice")
public class NoticeController {

    @Resource
    private NoticeService noticeService;
    @GetMapping("/getAll")
    public Result getAllNotice(){
        return noticeService.selectAllNotice();
    }

    @PostMapping("/add")
    public Result addNotice(@RequestBody Notice notice){
        return noticeService.addNewNotice(notice);
    }
}
