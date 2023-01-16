window.addEventListener("load",function (){
    var ul = document.querySelector(".title_content ul");

    $.get({
        'url': '/dynamic/animal_knowledge',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
            getDynamic(res,ul)
        }
    })
})