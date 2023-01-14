package com.drotsakura.animalaid.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.drotsakura.animalaid.pojo.Animal;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AnimalMapper extends BaseMapper<Animal> {
}
