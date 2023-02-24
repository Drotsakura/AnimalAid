window.addEventListener('load',function () {
    let dynamicId = window.localStorage.getItem('dynamicId');


    getUser();
    getDynamicDto(dynamicId);
    getComment(dynamicId)

    let data_comment = document.querySelector(".data_comment");
    let btn_comment = document.querySelector(".btn_comment");

    btn_comment.addEventListener("click",function (){
        let message = $(data_comment).val();
        $(data_comment).val(" ");
        addComment(dynamicId,message);
        getComment(dynamicId);
    })


})

function getUser(){
    let username = document.querySelector(".user_head span");

    $.get({
        'url': '/user/safeUser',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                console.log(res.data)
                $(username).html(res.data.username)
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function getDynamicDto(dynamicId){
    let titleHead = document.querySelector(".head1")
    let titleImg = document.querySelector(".head2_left img")
    let animalFeature = document.querySelector(".head2_right")
    let animalContent = document.querySelector(".dynamic_content")

    $.get({
        'url': '/dynamic/getDynamic',
        dataType: "json",
        'data' : {'dynamicId' : dynamicId},
        success: function(res){
            if (res.isSucceed){
                let dynamic = res.data;
                $(titleHead).html(dynamic.title)
                $(titleImg).attr('src',"../../uploads/"+dynamic.nativeUrl+"")
                $(animalFeature).html(dynamic.feature)
                $(animalContent).html(dynamic.content)
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function addComment(dynamicId,message){
    $.post({
        'url' : '/comment/addDynamicComment',
        'data' : {'id' : dynamicId , 'message' : message},
        success : function (res) {
            if (res.isSucceed){
                console.log(res.data)
            }else {
                console.log(res.errorMsg)
            }
        }
    })
}

function getComment(dynamicId){
    let ul = document.querySelector(".south ul");
    $(ul).html(" ")

    $.get({
        'url': '/comment/dynamicComment',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        'data' : {'id' : dynamicId},
        success : function (res){
            if (res.isSucceed){
                console.log(res.data)
                let commentList = res.data;

                for (i=0;i<commentList.length;i++){
                    let element = document.createElement("li");
                    element.innerHTML = "   <img src=\"../image/headpicture.png\" alt=\"\">\n" +
                        "                <div class=\"comment_left\">\n" +
                        "                    <div>"+i+"楼</div>\n" +
                        "                    <div>"+commentList[i].username+"</div>\n" +
                        "                </div>\n" +
                        "                <span class=\"comment_center\">"+commentList[i].message+"</span>"

                    let comment_right = document.createElement("div")
                    let div_report = document.createElement("div");
                    let div_time = document.createElement("div");

                    comment_right.setAttribute("class","comment_right");
                    div_report.setAttribute("userId",commentList[i].userId);
                    $(div_time).html("2022-1-15");
                    $(div_report).html("举报");

                    div_report.addEventListener("click",function (){
                        alert("此功能正在维护")
                    })

                    comment_right.appendChild(div_report);
                    comment_right.appendChild(div_time);
                    element.appendChild(comment_right);
                    ul.appendChild(element);
                }


            }else {
                console.log(res.errorMsg)
            }
        }
    })
}