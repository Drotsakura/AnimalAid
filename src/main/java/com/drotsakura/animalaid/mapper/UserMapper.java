package com.drotsakura.animalaid.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.drotsakura.animalaid.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
