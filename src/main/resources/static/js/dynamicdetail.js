window.addEventListener('load',function () {


    getUser();
    getDynamicDto();
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

function getDynamicDto(){
    let dynamicId = window.localStorage.getItem('dynamicId');
    window.localStorage.removeItem('dynamicId');

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

function getComment(){

}