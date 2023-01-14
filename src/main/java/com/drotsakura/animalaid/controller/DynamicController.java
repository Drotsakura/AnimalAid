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

    @Resource
    private ImageService imageService;

    @PostMapping("/save")
    public Result save(@RequestBody Dynamic dynamic){

        return Result.ok("动态添加成功");
    }

    @GetMapping("/select")
    public Result allDynamic(){
        LambdaQueryWrapper<Dynamic> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Dynamic::getUserid, BaseContext.getId());
        List<Dynamic> list = dynamicService.list(queryWrapper);

        List<DynamicDto> dynamicDtoList = list.stream().map(item -> {
            Long imageId = item.getImageId();
            Image image = imageService.getById(imageId);
            DynamicDto dynamicDto = new DynamicDto();
            BeanUtils.copyProperties(item, dynamicDto);
            dynamicDto.setNativeUrl(image.getNativeUrl());
            return dynamicDto;
        }).toList();

        return Result.ok(dynamicDtoList);
    }
}
