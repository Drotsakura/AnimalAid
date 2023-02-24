window.addEventListener('load',function(){
    var powerlist = this.document.querySelectorAll('.powerlist li div');
    var centertitle = this.document.querySelector('.center_title');
    var basics = this.document.querySelector('.basics');
    var userword = this.document.querySelector('.password');
    var feedback = this.document.querySelector('.feedback');
    var userItem =JSON.parse(window.localStorage.getItem('userItem'));

    //名称设置
    let usernames = this.document.querySelectorAll('.username');
    for (i=0;i<usernames.length;i++){
        $( usernames[i]).html(userItem.username);
    }



    //UI交互
    for(i=0;i<powerlist.length-1;i++){
        powerlist[i].addEventListener('click',function(){
            let nowHtml = $(this).html();
            $(centertitle).html(nowHtml);
            alldisplay(basics,userword,feedback);
            if(nowHtml === "基本资料"){
                const basic_name = document.querySelector('.newName');
                const basic_address = document.querySelector('.newAddress');
                const basic_email = document.querySelector('.newEmail');

                $(basic_name).val(userItem.username);
                $(basic_address).val(userItem.address);
                $(basic_email).val(userItem.email);
                basics.style.display = 'block';
            }else if(nowHtml === "修改密码"){
                userword.style.display = 'block';
            }else{
                feedback.style.display = 'block';
            }
        })
    }


    //密码提交功能
    let btn_word = this.document.querySelector('.wordsave');
    btn_word.addEventListener('click',function (){
        const newPassWord = document.querySelector('.newPassword');
        const newPassWord2 = document.querySelector('.newPassword2');
        let newWord = $(newPassWord).val()
        let newWord2 = $(newPassWord2).val()

        if (newWord === newWord2){
            $(newPassWord).val("");
            $(newPassWord2).val("");

            let user = {
                id : userItem.id,
                password : newWord
            }

            updateWord(user);
        }else{
            alert("密码输入不一致");
        }
    })


    //基本资料更新功能
    let btn_basic = this.document.querySelector('.basicsave')
    btn_basic.addEventListener('click',function (){
        const newName = document.querySelector('.newName');
        const newAddress = document.querySelector('.newAddress');
        const newEmail = document.querySelector('.newEmail');

        let name = $(newName).val()
        let address = $(newAddress).val()
        let email = $(newEmail).val()

        let user = {
            id : userItem.id,
            'username' : name,
            'address' : address,
            'email' : email
        }

        updateWord(user);
    })


    //反馈功能
    let btn_feed = this.document.querySelector('.feedsave');
    btn_feed.addEventListener('click',function (){
        const feedContent = document.querySelector('.feedback textarea');
        let feedback = $(feedContent).val()
        $(feedContent).val("")

        let feedBack = {
            content : feedback
        }

        saveFeed(feedBack);
    })

    //退出登录
    let logout = this.document.querySelector('.logout');
    logout.addEventListener('click',function (){
        if (confirm("确定退出登录吗？")){
            alert("将返回登录界面")
            window.localStorage.removeItem('userItem');
            window.location.href = '../index.html'
        }
    })
})


function alldisplay(){
    for(i=0;i<arguments.length;i++){
        arguments[i].style.display = 'none';
    }
}

function updateWord(user){
    $.post({
        'url': '/user/update',
        'data': JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                alert("信息修改成功,将返回登录界面");
                window.localStorage.removeItem('userItem');
                window.location.href = '../index.html'
            }else{
                alert("信息修改失败")
            }
        }
    })

}

function saveFeed(feedBack) {
    $.post({
        'url': '/feedback/save',
        'data': JSON.stringify(feedBack),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                alert(res.data);
            }else{
                alert(res.errorMsg)
            }
        }
    })
}