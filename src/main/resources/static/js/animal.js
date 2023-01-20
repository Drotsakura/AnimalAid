window.addEventListener('scroll',function(){
    var div  = this.document.querySelector('.sendnew');
    var offersetHeight = this.window.pageYOffset;
    var newDynamic = this.document.querySelector(".new_dynamic")

    newDynamic.style.top = 200 +offersetHeight + 'px';
    div.style.top = 2 + offersetHeight+'px';
})

window.addEventListener("load",function (){
    var btn_cancel = document.querySelector(".btn_cancel");
    var sendNew  = this.document.querySelector('.sendnew');
    var newDynamic = this.document.querySelector(".new_dynamic");
    var animal_type = this.document.querySelector('#animal_type');
    var btn_issue = this.document.querySelector('.btn_issue');

    var title = this.document.querySelector("#title");
    var select = this.document.querySelector("#animal_type")
    var textarea1 = this.document.querySelector("#textarea1");
    var textarea2 = this.document.querySelector("#textarea2");

    var img_tip = this.document.querySelector(".img_tip");

    sendNew.addEventListener("click",function (){
        newDynamic.style.display = "block"
        getAnimalType(animal_type)
    })

    btn_cancel.addEventListener("click",function (){
        newDynamic.style.display = "none"
    })

    btn_issue.addEventListener("click",function () {
        let index = select.selectedIndex;
        let dynamic = {
            "title" : $(title).val(),
            "animalId" : select.options[index].value,
            "type" : 1,
            "feature" : $(textarea1).val(),
            "content" : $(textarea2).val()
        }

        saveDynamic(dynamic,newDynamic);

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
        }
    } else {
        alert(res.errorMsg)
    }
}

function getAnimalType(animal_type){
    $.get({
        'url': '/animal/select',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                const listAnimal = res.data;
                for (i=0;i<listAnimal.length;i++) {
                    let element = document.createElement("option");
                    $(element).val(listAnimal[i].id)
                    $(element).html(listAnimal[i].type)
                    animal_type.appendChild(element);
                }
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function saveDynamic(dynamic,newDynamic){
    $.post({
        'url': '/dynamic/save',
        'data': JSON.stringify(dynamic),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
            if (res.isSucceed){
                alert(res.data)
                newDynamic.style.display = "none"
            }else {
                alert(res.errorMsg)
            }
        }
    })
}

function fileUpload(){
    let fileForm = $("#formUpload");
    let formData = new FormData(fileForm[0]);
    let show_img = document.querySelector(".show_img");
    $.post({
        'url' : '/upload/save',
        'data': formData,
        contentType: false,
        processData: false,
        success: function (res){
            if (res.isSucceed){
                console.log(show_img)
                show_img.style.backgroundImage = "url(../../uploads/"+res.data+")"
            }
        }
    })
}

