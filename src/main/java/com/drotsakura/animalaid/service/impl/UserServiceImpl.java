package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.common.BaseContext;
import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.mapper.UserMapper;
import com.drotsakura.animalaid.pojo.SafeUser;
import com.drotsakura.animalaid.pojo.User;
import com.drotsakura.animalaid.service.UserService;
import com.drotsakura.animalaid.utils.RandomUsername;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,User> implements UserService {
    @Override
    public Result queryByEmailAndPassword(User user, HttpSession httpSession) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getEmail,user.getEmail())
                .eq(User::getPassword,user.getPassword());
        User one = this.getOne(queryWrapper);

        if (one == null) return Result.fail("用户不存在");
        httpSession.setAttribute("userid",one.getId());
        return  Result.ok(one);
    }

    @Override
    public Result updateForUser(User user) {
        LambdaUpdateWrapper<User> updateWrapper = new LambdaUpdateWrapper<>();
        if ( BaseContext.getId().equals(user.getId())){
            updateWrapper.eq(User::getId,user.getId())
                    .set(!StringUtils.isEmpty(user.getUsername()),User::getUsername,user.getUsername())
                    .set(!StringUtils.isEmpty(user.getPassword()),User::getPassword,user.getPassword())
                    .set(!StringUtils.isEmpty(user.getEmail()),User::getEmail,user.getEmail())
                    .set(!StringUtils.isEmpty(user.getAddress()),User::getAddress,user.getAddress());
            this.update(updateWrapper);
        }else {
            return Result.fail("更新失败");
        }

        return Result.ok("更新成功");
    }

    @Override
    public Result queryAllDoctors() {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getType,1);

        List<SafeUser> listDoctors = this.list(queryWrapper).stream().map(item -> {
            SafeUser user = new SafeUser();
            user.setId(item.getId());
            user.setUsername(item.getUsername());
            return user;
        }).toList();

        return Result.ok(listDoctors);
    }

    @Override
    public Result registerByEmail(User user) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getEmail,user.getEmail());
        User one = this.getOne(queryWrapper);

        if (one != null){
            return Result.fail("邮箱已注册,不能重复注册");
        }

        user.setUsername(RandomUsername.getSixBitUsername());
        user.setGrade(0);
        user.setType(0);
        user.setImageId(1L);
        this.save(user);

        return Result.ok("账号注册成功");
    }

    @Override
    public Result getSafeUser() {
        User user = this.getById(BaseContext.getId());
        SafeUser safeUser = new SafeUser();
        safeUser.setId(user.getId());
        safeUser.setUsername(user.getUsername());
        return Result.ok(safeUser);
    }

    @Override
    public Result getSimpleUser(SafeUser safeUser) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(!StringUtils.isEmpty(safeUser.getId()),User::getId,safeUser.getId())
                .eq(!StringUtils.isEmpty(safeUser.getUsername()),User::getUsername,safeUser.getUsername())
                .eq(!StringUtils.isEmpty(safeUser.getEmail()),User::getEmail,safeUser.getEmail());
        List<User> userList = this.list(queryWrapper);

        List<SafeUser> safeUsers = userList.stream().map(item -> {
            SafeUser newSafeUser = new SafeUser();
            newSafeUser.setId(item.getId());
            newSafeUser.setUsername(item.getUsername());
            newSafeUser.setEmail(item.getEmail());
            return newSafeUser;
        }).toList();

        return Result.ok(safeUsers);
    }

    @Override
    public Result stopUserSay(Long id) {
        LambdaUpdateWrapper<User> updateWrapper = new LambdaUpdateWrapper<>();
        updateWrapper.eq(User::getId,id).set(User::getState,1);

        if (this.update(updateWrapper)) {
            return Result.ok("禁言成功");
        }
        return Result.fail("禁言失败");
    }

    @Override
    public Result queryStopSayUser() {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getState,1);
        List<SafeUser> safeUsers = this.list(queryWrapper).stream().map(item -> {
            SafeUser safeUser = new SafeUser();
            safeUser.setId(item.getId());
            safeUser.setUsername(item.getUsername());
            safeUser.setEmail(item.getEmail());
            return safeUser;
        }).toList();
        return Result.ok(safeUsers);
    }

    @Override
    public Result cancelStopSay(Long id) {
        LambdaUpdateWrapper<User> updateWrapper = new LambdaUpdateWrapper<>();
        updateWrapper.eq(User::getId,id).set(User::getState,0);

        if (this.update(updateWrapper)) {
            return Result.ok("解除成功");
        }
        return Result.fail("解除失败");
    }
}
