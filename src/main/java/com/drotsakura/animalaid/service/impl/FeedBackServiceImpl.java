package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.mapper.FeedBackMapper;
import com.drotsakura.animalaid.pojo.FeedBack;
import com.drotsakura.animalaid.service.FeedBackService;
import org.springframework.stereotype.Service;

@Service
public class FeedBackServiceImpl extends ServiceImpl<FeedBackMapper, FeedBack> implements FeedBackService {
}
