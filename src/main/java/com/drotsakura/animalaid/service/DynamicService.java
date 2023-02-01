package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Dynamic;
import com.drotsakura.animalaid.pojo.DynamicDto;

public interface DynamicService extends IService<Dynamic> {
    public Result queryAllDynamic();

    public Result queryByType(Integer type);

    public Result saveDynamic(DynamicDto dynamicDto);

    public Result getDynamic(Long dynamicId);
}
