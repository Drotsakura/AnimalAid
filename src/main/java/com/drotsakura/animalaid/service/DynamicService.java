package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Dynamic;

public interface DynamicService extends IService<Dynamic> {
    public Result queryAllDynamic();

    public Result queryByType(Integer type);

    public Result saveDynamic(Dynamic dynamic);
}
