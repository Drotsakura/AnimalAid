package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Notice;

public interface NoticeService extends IService<Notice> {
    public Result selectAllNotice();

    public Result addNewNotice(Notice notice);
}
