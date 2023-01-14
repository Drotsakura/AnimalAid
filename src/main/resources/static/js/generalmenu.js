window.addEventListener('load',function(){
    var ul = document.querySelector('.head_change ul');
    var nowpage = document.querySelector('.nowpage');
    var downspan = document.querySelector('.down');
    var dwonimg = $(downspan).children();
    var divlist = document.querySelectorAll('.head_change ul li a');

    downspan.addEventListener('mouseenter',function(){
        dwonimg.prop("src","../image/dwonselect.png");
        $(ul).slideDown();
    })

    downspan.addEventListener('mouseleave',function(){
        dwonimg.prop("src","../image/dwon.png");
    })

    ul.addEventListener('mouseenter',function(){
        dwonimg.prop("src","../image/dwonselect.png");
        $(ul).slideDown();
    })

    ul.addEventListener('mouseleave',function(){
        $(ul).slideUp();
        dwonimg.prop("src","../image/dwon.png");
    })

    for(i=0;i<divlist.length;i++){
        divlist[i].addEventListener('click',function(){
            nowhtml = $(this).children().html();
            if (nowhtml === "个人中心"){
                window.location.href = '../page/contentcenter.html'
            }else if(nowhtml === "我的动态"){
                window.location.href = '../page/contentdynamic.html'
            }else if(nowhtml === "聊天信息"){
                window.location.href = '../page/contentchat.html'
            }else if(nowhtml === "爱心医生"){
                window.location.href = '../page/contentdoctor.html'
            }else{
                window.location.href = '../page/contentregulator.html'
            }
        })
    }


})