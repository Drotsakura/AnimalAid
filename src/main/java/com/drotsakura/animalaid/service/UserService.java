package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.User;
import jakarta.servlet.http.HttpSession;

public interface UserService extends IService<User> {
    public Result queryByEmailAndPassword(User user, HttpSession httpSession);

    public Result updateForUser(User user);

    public Result queryAllDoctors();
}
