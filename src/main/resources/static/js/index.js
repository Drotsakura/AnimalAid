window.addEventListener('load',function (){
    var menus = document.querySelectorAll('.head_content a');
    var userItem = window.localStorage.getItem('userItem');

    for (i=0;i<menus.length;i++){
        menus[i].addEventListener('click',function (){
            if (!userItem){
                window.location.href = '/page/login.html';
            }else{
                let menuText = $(this).html();
                if (menuText === "动态"){
                    window.location.href = '/page/contentdynamic.html'
                }else if (menuText === "消息"){
                    window.location.href = '/page/contentchat.html'
                }else {
                    window.location.href = '/page/contentcenter.html'
                }
            }
        })
    }
})