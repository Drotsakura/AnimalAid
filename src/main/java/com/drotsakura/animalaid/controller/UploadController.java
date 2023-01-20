package com.drotsakura.animalaid.controller;

import com.drotsakura.animalaid.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@RestController
@RequestMapping("/upload")
public class UploadController {
    @Value("${animal_aid.path}")
    private String imgPath;

    @PostMapping("/save")
    public Result uploadImage(@RequestParam("file") MultipartFile image){
        System.out.println("文件处理");
        String fileName = null;
        try {
            String originalFilename = image.getOriginalFilename();
            fileName = createNewFileName(originalFilename);
            image.transferTo(new File(imgPath,fileName));
        }catch (Exception e){
            e.printStackTrace();
        }
        return Result.ok(fileName);
    }

    //生成唯一特定的文件名称
    private String createNewFileName(String originalFileName){
        int index = originalFileName.lastIndexOf(".");
        String suffix = originalFileName.substring(index);

        String name = UUID.randomUUID().toString();
        String[] strings = name.split("-");

        String newFileName = "";
        for (String string : strings) {
            newFileName += string;
        }

       return newFileName + suffix;
    }
}
