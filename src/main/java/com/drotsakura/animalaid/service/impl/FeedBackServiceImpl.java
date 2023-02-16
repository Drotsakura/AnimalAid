package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.mapper.FeedBackMapper;
import com.drotsakura.animalaid.pojo.FeedBack;
import com.drotsakura.animalaid.pojo.FeedBackDto;
import com.drotsakura.animalaid.pojo.User;
import com.drotsakura.animalaid.service.FeedBackService;
import com.drotsakura.animalaid.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedBackServiceImpl extends ServiceImpl<FeedBackMapper, FeedBack> implements FeedBackService {
    @Resource
    private UserService userService;
    @Override
    public Result getAllFeedBack() {
        List<FeedBackDto> backDtoList = this.list().stream().map(item -> {
            FeedBackDto feedBackDto = new FeedBackDto();
            BeanUtils.copyProperties(item, feedBackDto);
            User user = userService.getById(item.getUserId());
            feedBackDto.setUsername(user.getUsername());
            return feedBackDto;
        }).toList();
        return Result.ok(backDtoList);
    }
}
