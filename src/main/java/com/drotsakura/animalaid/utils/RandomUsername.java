package com.drotsakura.animalaid.utils;

import java.util.Random;

public class RandomUsername {
    public static String getSixBitUsername(){
        Random random = new Random();
        String result="";
        for (int i=0;i<6;i++)
        {
            result+=random.nextInt(10);
        }

        return "AA"+result;
    }
}
