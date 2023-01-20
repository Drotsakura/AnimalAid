package com.drotsakura.animalaid.config;

import com.drotsakura.animalaid.intercept.UrlLimitIntercept;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Value("${animal_aid.path}")
    private String imgPath;
    private static final String[] paths = {"/uploads/**","/user/login","/user/register","/css/**","/image/**","/js/**","/index.html","/page/login.html"};

    @Resource
    private UrlLimitIntercept urlLimitIntercept;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(urlLimitIntercept).excludePathPatterns(paths);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        /**具体映射器(当不放在static和templates下)
         * param1：路径通配符
         * param2：具体工程目录下
         * 可添加多个
         */
        registry.addResourceHandler("/uploads/**").addResourceLocations("file:"+imgPath);
    }
}
