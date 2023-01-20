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
            }else if(nowText === "轮播图更换"){
                centerBanner.style.display = 'block'
            }else if(nowText === "用户禁言"){
                centerViolate.style.display = 'block'
            }else if(nowText === "禁言管理"){
                centerControl.style.display = 'block'
            }else{
                centerFeedback.style.display = 'block'
            }
        })
    }
})

function alldisplay(){
    for(i=0;i<arguments.length;i++){
        arguments[i].style.display = 'none';
    }
}