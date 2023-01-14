package com.drotsakura.animalaid.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.drotsakura.animalaid.mapper.DynamicMapper;
import com.drotsakura.animalaid.pojo.Dynamic;
import com.drotsakura.animalaid.service.DynamicService;
import org.springframework.stereotype.Service;

@Service
public class DynamicServiceImpl extends ServiceImpl<DynamicMapper, Dynamic> implements DynamicService {
}
