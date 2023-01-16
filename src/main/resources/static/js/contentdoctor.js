window.addEventListener('load',function (){
    var ul = document.querySelector(".docter_person ul");

    $.get({
        'url': '/user/doctor',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
            if (res.isSucceed) {
                const listDoctorStr = JSON.stringify(res.data);
                let listDoctors = eval(listDoctorStr);

                for (i=0;i<listDoctors.length;i++){
                    let element = document.createElement("li");
                    element.innerHTML = "<img src=\"../image/docter.png\" alt=\""+listDoctors[i].id+"\">\n" +
                        "                <div userid=\"#\">"+listDoctors[i].username+"</div>\n" +
                        "                <input type=\"button\" value=\"发送消息\">"

                    element.addEventListener("click",function (){
                        console.log(this)
                    })

                    ul.appendChild(element)

                    console.log(listDoctors[i])

                }
            } else {
                alert(res.errorMsg)
            }
        }
    })
})