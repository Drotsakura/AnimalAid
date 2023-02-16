window.addEventListener("load",function(){
    var powerlist = this.document.querySelectorAll(".powerlist ul li div");
    var centerTitle = this.document.querySelector(".center_title");

    var centerNotice = this.document.querySelector(".center_notice");
    var centerBanner = this.document.querySelector(".center_banner");
    var centerViolate = this.document.querySelector(".center_violate");
    var centerControl = this.document.querySelector(".center_control");
    var centerFeedback = this.document.querySelector(".center_feedback");

    for(i=0;i<powerlist.length;i++){
        powerlist[i].addEventListener("click",function(){
            alldisplay(centerNotice,centerBanner,centerViolate,centerControl,centerFeedback);
            let nowText = $(this).html();
            $(centerTitle).html(nowText);

            if(nowText === "公告更新"){
                centerNotice.style.display = 'block'

                getNotice();

                let btn_notice = document.querySelector("#btn_notice");
                btn_notice.addEventListener("click",function (){
                    let text_area1 = document.querySelector("#text_area1");

                    let notice = {
                        'content': $(text_area1).val()
                    }

                    addNotice(notice);
                    location.reload();
                })


            }else if(nowText === "轮播图更换"){
                centerBanner.style.display = 'block'
            }else if(nowText === "用户禁言"){
                centerViolate.style.display = 'block'

                let select_condition = document.querySelector("#select_condition");
                let condition = document.querySelector(".condition");
                let userQuery = document.querySelector(".btn_query");

                userQuery.addEventListener('click',function (){
                    let listUser_Content = document.querySelector(".violate_listUser .listUser_Content ul");
                    $(listUser_Content).html("")
                    let index = select_condition.selectedIndex;
                    let safeUser;

                    if (select_condition[index].text === "用户名"){
                        safeUser = {
                            'username' : $(condition).val()
                        }
                    }else if (select_condition[index].text === "邮箱"){
                        safeUser = {
                            'email' : $(condition).val()
                        }
                    }else{
                        safeUser = {
                            'id' : $(condition).val()
                        }
                    }

                    console.log(safeUser)
                    queryUser(safeUser)
                })


            }else if(nowText === "禁言管理"){
                centerControl.style.display = 'block'
                queryStopSayUser();
            }else{
                centerFeedback.style.display = 'block'
                getAllFeedBack();
            }
        })
    }


})

function alldisplay(){
    for(i=0;i<arguments.length;i++){
        arguments[i].style.display = 'none';
    }
}

function getNotice(){
    let notice_before = this.document.querySelector(".notice_before ul");

    $.get({
        'url': '/notice/getAll',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                console.log(res.data)
                const noticeList = res.data

                for (i=0;i<noticeList.length;i++) {
                    let element = document.createElement("li");
                    element.innerHTML = "  <div>"+noticeList[i].content+"</div><span>发布时间:</span><span>"+noticeList[i].createTime+"</span>\n" +
                        "                            <input type=\"button\" value=\"删除\" class=\"btn_delete\">"

                    element.setAttribute("noticeId",noticeList[i].id)
                    notice_before.appendChild(element);
                }

            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function addNotice(notice){
    $.post({
        'url': '/notice/add',
        'data': JSON.stringify(notice),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                alert(res.data)
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function queryUser(user){
    let listUser_Content = document.querySelector(".violate_listUser .listUser_Content ul");

    $.post({
        'url': '/user/simpleUser',
        'data': JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                console.log(res.data)
                let userList = res.data;
                for(i=0;i<userList.length;i++){
                    let element = document.createElement("li");
                    element.innerHTML = "<span class=\"show_id\">"+userList[i].id+"</span><span class=\"show_username\">"+userList[i].username+"</span><span class=\"show_email\">"+userList[i].email+"</span>"

                    let show_add = document.createElement("span");
                    show_add.setAttribute("class","show_add");
                    show_add.setAttribute("userId",userList[i].id)
                    $(show_add).html("禁言")
                    show_add.addEventListener("click",function (){
                        user = {
                            'id' : this.getAttribute("userId")
                        }

                        stopUserSay(user)
                    })

                    element.appendChild(show_add);
                    listUser_Content.appendChild(element);
                }
            }else {
                alert(res.errorMsg)
            }
        }
    })
}



function queryStopSayUser(){
    let listUser_Content = document.querySelector(".center_control .listUser_Content ul");
    $.get({
        'url' : '/user/queryStopSayUser',
        success: function(res){
            if (res.isSucceed){
                console.log(res.data)
                let userList = res.data;
                for(i=0;i<userList.length;i++){
                    let element = document.createElement("li");
                    element.innerHTML = "<span class=\"show_id\">"+userList[i].id+"</span><span class=\"show_username\">"+userList[i].username+"</span><span class=\"show_email\">"+userList[i].email+"</span>"

                    let show_add = document.createElement("span");
                    show_add.setAttribute("class","show_add");
                    show_add.setAttribute("userId",userList[i].id)
                    $(show_add).html("解除")
                    show_add.addEventListener("click",function (){
                        let user = {
                            'id': this.getAttribute("userId")
                        }

                        cancelStopSay(user)
                    })

                    element.appendChild(show_add);
                    listUser_Content.appendChild(element);
                }
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function stopUserSay(user){
    $.post({
        'url' : '/user/stopSay',
        'data' : user,
        success: function(res){
            if (res.isSucceed){
                alert(res.data)
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function cancelStopSay(user){
    $.post({
        'url' : '/user/cancelStopSay',
        'data' : user,
        success: function(res){
            if (res.isSucceed){
                alert(res.data)
                location.reload();
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function getAllFeedBack(){
    let center_feedback = document.querySelector(".center_feedback ul")

    $.get({
        'url' : '/feedback/getAll',
        success : function (res){
            if (res.isSucceed){
                console.log(res.data)
                let feedBackList = res.data
                for (i=0;i<feedBackList.length;i++){
                    let element = document.createElement('li');
                    element.innerHTML = " <div class=\"list_left\">\n" +
                        "                            <div>"+feedBackList[i].username+":</div><div>"+feedBackList[i].createTime+"</div>\n" +
                        "                        </div>\n" +
                        "                        <div class=\"list_right\">"+feedBackList[i].content+"</div>"

                    center_feedback.appendChild(element);
                }
            }else {
                console.log(res.errorMsg)
            }
        }
    })
}