package com.drotsakura.animalaid.controller;

import com.drotsakura.animalaid.common.Result;
import com.drotsakura.animalaid.pojo.Animal;
import com.drotsakura.animalaid.service.AnimalService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Resource
    AnimalService animalService;

    @GetMapping("/select")
    public Result selectAll(){
        List<Animal> animalList = animalService.list();
        return Result.ok(animalList);
    }
}
