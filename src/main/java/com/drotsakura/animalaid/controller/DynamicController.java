package com.drotsakura.animalaid.controller;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Dynamic;
import com.drotsakura.animalaid.pojo.DynamicDto;
import com.drotsakura.animalaid.pojo.Image;
import com.drotsakura.animalaid.service.DynamicService;
import com.drotsakura.animalaid.service.ImageService;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dynamic")
public class DynamicController {
    @Resource
    private DynamicService dynamicService;

    @PostMapping("/save")
    public Result save(@RequestBody Dynamic dynamic){
        System.out.println(dynamic);
        return dynamicService.saveDynamic(dynamic);
    }

    @GetMapping("/select")
    public Result allDynamic(){
        return dynamicService.queryAllDynamic();
    }

    @GetMapping("/animal_help")
    public Result selectDynamicHelp(){
        return dynamicService.queryByType(0);
    }

    @GetMapping("/animal_register")
    public Result selectDynamicRegister(){
        return dynamicService.queryByType(1);
    }

    @GetMapping("/animal_change")
    public Result selectDynamicChange(){
        return dynamicService.queryByType(2);
    }

    @GetMapping("/animal_knowledge")
    public Result selectDynamicKnowledge(){
        return dynamicService.queryByType(3);
    }

    @GetMapping("/animal_mate")
    public Result selectDynamicMate(){
        return dynamicService.queryByType(4);
    }

}
