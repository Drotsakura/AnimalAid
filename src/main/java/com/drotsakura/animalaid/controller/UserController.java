package com.drotsakura.animalaid.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.User;
import com.drotsakura.animalaid.service.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/login")
    public Result login(@RequestBody User user,HttpSession HttpSession){
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getEmail,user.getEmail())
                    .eq(User::getPassword,user.getPassword());
        User one = userService.getOne(queryWrapper);

        if (one == null) return Result.fail("用户不存在");
        HttpSession.setAttribute("userid",one.getId());
        return  Result.ok(one);
    }

    @PostMapping("/update")
    public Result update(@RequestBody User user){
        LambdaUpdateWrapper<User> updateWrapper = new LambdaUpdateWrapper<>();
        if ( BaseContext.getId().equals(user.getId())){
            updateWrapper.eq(User::getId,user.getId())
                    .set(!StringUtils.isEmpty(user.getUsername()),User::getUsername,user.getUsername())
                    .set(!StringUtils.isEmpty(user.getPassword()),User::getPassword,user.getPassword())
                    .set(!StringUtils.isEmpty(user.getEmail()),User::getEmail,user.getEmail())
                    .set(!StringUtils.isEmpty(user.getAddress()),User::getAddress,user.getAddress());
            userService.update(updateWrapper);
        }else {
            return Result.fail("更新失败");
        }

        return Result.ok("更新成功");
    }

}
