package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.mapper.NoticeMapper;
import com.drotsakura.animalaid.pojo.Notice;
import com.drotsakura.animalaid.service.NoticeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeServiceImpl extends ServiceImpl<NoticeMapper, Notice> implements NoticeService {
    @Override
    public Result selectAllNotice() {
        List<Notice> noticeList = this.list();
        return Result.ok(noticeList);
    }

    @Override
    public Result addNewNotice(Notice notice) {
        notice.setUserId(BaseContext.getId());

        if (this.save(notice)) {
            return Result.ok("发布成功");
        }
        return Result.fail("添加失败");
    }
}
