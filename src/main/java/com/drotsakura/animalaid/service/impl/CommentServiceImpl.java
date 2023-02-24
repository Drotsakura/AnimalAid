package com.drotsakura.animalaid.service.impl;

import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Comment;
import com.drotsakura.animalaid.pojo.User;
import com.drotsakura.animalaid.service.CommentService;
import com.drotsakura.animalaid.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class CommentServiceImpl implements CommentService {
    @Resource
    private StringRedisTemplate stringRedisTemplate;

    @Resource
    private UserService userService;

    @Override
    public Result getDynamicComment(Long id) {
        Set<Object> keys = stringRedisTemplate.opsForHash().keys(String.valueOf(id));
        List<Comment> commentList = new ArrayList<>();

        if (keys.isEmpty()){
            return Result.ok(commentList);
        }

        for (Object key : keys) {
            String value = (String) stringRedisTemplate.opsForHash().get(String.valueOf(id), key);
            Long userId = Long.valueOf(value);

            User user = userService.getById(userId);

            Comment comment = new Comment();
            comment.setUserId(userId);
            comment.setMessage(String.valueOf(key));
            comment.setUsername(user.getUsername());
            commentList.add(comment);
        }
        return Result.ok(commentList);
    }

    @Override
    public Result addDynamicComment(Long id, String message) {
        System.out.println(id+message);
        stringRedisTemplate.opsForHash().put(String.valueOf(id),message, String.valueOf(BaseContext.getId()));
        return Result.ok("评论成功");
    }
}
