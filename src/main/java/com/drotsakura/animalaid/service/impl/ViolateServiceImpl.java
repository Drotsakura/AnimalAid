package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.mapper.ViolateMapper;
import com.drotsakura.animalaid.pojo.Violate;
import com.drotsakura.animalaid.service.ViolateService;
import org.springframework.stereotype.Service;

@Service
public class ViolateServiceImpl extends ServiceImpl<ViolateMapper, Violate> implements ViolateService {
}
