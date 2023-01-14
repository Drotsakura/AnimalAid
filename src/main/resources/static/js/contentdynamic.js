window.addEventListener('load',function (){
    var ul = document.querySelector(".content ul");

    $.get({
        'url': '/dynamic/select',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed) {
                const listDynamicStrs = JSON.stringify(res.data);
                console.log(listDynamicStrs)

                let listDynamic = eval(listDynamicStrs);
                console.log(listDynamic)

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
    })
})