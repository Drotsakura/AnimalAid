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
    public Result login(@RequestBody User user,HttpSession httpSession){
      return userService.queryByEmailAndPassword(user,httpSession);
    }

    @PostMapping("/update")
    public Result update(@RequestBody User user){
       return userService.updateForUser(user);
    }

    @GetMapping("/doctor")
    public Result selectDoctor(){
       return userService.queryAllDoctors();
    }

    @PostMapping("/register")
    public Result register(@RequestBody User user){
        return userService.registerByEmail(user);
    }

    @GetMapping("/safeUser")
    public Result safeUser(){
        return userService.getSafeUser();
    }

}
