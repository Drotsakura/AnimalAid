package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.FeedBack;

public interface FeedBackService extends IService<FeedBack> {
    public Result getAllFeedBack();
}
