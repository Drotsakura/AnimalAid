package com.drotsakura.animalaid.service;

import com.drotsakura.animalaid.common.Result;

public interface CommentService {
    public Result getDynamicComment(Long id);
    public Result addDynamicComment(Long id,String message);
}
