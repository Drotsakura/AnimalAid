package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.mapper.NoticeMapper;
import com.drotsakura.animalaid.pojo.Notice;
import com.drotsakura.animalaid.service.NoticeService;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl extends ServiceImpl<NoticeMapper, Notice> implements NoticeService {
}
