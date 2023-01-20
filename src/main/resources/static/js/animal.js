window.addEventListener('scroll',function(){
    var div  = this.document.querySelector('.sendnew');
    var offersetHeight = this.window.pageYOffset;
    var newDynamic = this.document.querySelector(".new_dynamic")

    newDynamic.style.top = 200 +offersetHeight + 'px';
    div.style.top = 2 + offersetHeight+'px';
    console.log(offersetHeight+"创建按钮固定"+div);

})

window.addEventListener("load",function (){
    var btn_cancel = document.querySelector(".btn_cancel");
    var sendNew  = this.document.querySelector('.sendnew');
    var newDynamic = this.document.querySelector(".new_dynamic")

    sendNew.addEventListener("click",function (){
        newDynamic.style.display = "block"
    })

    btn_cancel.addEventListener("click",function (){
        newDynamic.style.display = "none"
    })
})

function getDynamic(res,ul){
    if (res.isSucceed) {
        const listDynamicStrs = JSON.stringify(res.data);
        let listDynamic = eval(listDynamicStrs);

        for (i=0;i<listDynamic.length;i++){
            let element = document.createElement("li");
            element.innerHTML = " <a href=\"#\" dynamicId=\""+listDynamic[i].animalId+"\">\n" +
                "                        <div class=\"content_img\"><img src=\"../../uploads/"+listDynamic[i].nativeUrl+"\" alt=\"#\"></div>\n" +
                "                        <div class=\"content_rich\">\n" +
                "                            <span class=\"data1\">"+listDynamic[i].title+"</span>\n" +
                "                            <span class=\"data2\">"+listDynamic[i].content+"</span>\n" +
                "                            <span class=\"data3\">"+listDynamic[i].updateTime+"</span>\n" +
                "                        </div>\n" +
                "                    </a>"

            element.addEventListener("click",function (){
                console.log(this)
            })

            ul.appendChild(element)

            console.log(listDynamic[i])

        }
    } else {
        alert(res.errorMsg)
    }
}