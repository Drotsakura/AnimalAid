package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.mapper.DynamicMapper;
import com.drotsakura.animalaid.pojo.Dynamic;
import com.drotsakura.animalaid.pojo.DynamicDto;
import com.drotsakura.animalaid.pojo.Image;
import com.drotsakura.animalaid.service.DynamicService;
import com.drotsakura.animalaid.service.ImageService;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DynamicServiceImpl extends ServiceImpl<DynamicMapper, Dynamic> implements DynamicService {
    @Resource
    private ImageService imageService;
    public Result queryAllDynamic(){
        LambdaQueryWrapper<Dynamic> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Dynamic::getUserid, BaseContext.getId());
        List<Dynamic> list = this.list(queryWrapper);

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

    @Override
    public Result queryByType(Integer type) {
        LambdaQueryWrapper<Dynamic> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Dynamic::getType,type);
        List<DynamicDto> dynamicDtoList = this.list(queryWrapper).stream().map(item -> {
            Long imageId = item.getImageId();
            Image image = imageService.getById(imageId);
            DynamicDto dynamicDto = new DynamicDto();
            BeanUtils.copyProperties(item, dynamicDto);
            dynamicDto.setNativeUrl(image.getNativeUrl());
            return dynamicDto;
        }).toList();

        return Result.ok(dynamicDtoList);
    }

    @Override
    public Result saveDynamic(Dynamic dynamic) {
        dynamic.setUserid(BaseContext.getId());
        dynamic.setImageId(1L);

        if (!this.save(dynamic)){
            return Result.fail("保存失败");
        }
        return Result.ok("发布成功");
    }
}
