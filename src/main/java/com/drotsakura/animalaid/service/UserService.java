package com.drotsakura.animalaid.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.SafeUser;
import com.drotsakura.animalaid.pojo.User;
import jakarta.servlet.http.HttpSession;

public interface UserService extends IService<User> {
    public Result queryByEmailAndPassword(User user, HttpSession httpSession);

    public Result updateForUser(User user);

    public Result queryAllDoctors();

    public Result registerByEmail(User user);

    public Result getSafeUser();

    public Result getSimpleUser(SafeUser safeUser);

    public Result stopUserSay(Long id);

    public Result queryStopSayUser();

    public Result cancelStopSay(Long id);
}
