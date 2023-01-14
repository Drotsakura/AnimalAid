window.addEventListener('load',function(){
    var div = document.querySelector('.banner');
    var ul = document.querySelector('.banner ul');
    var ol = document.querySelector('.banner ol');
    var li = ul.querySelector('.banner ul li');
    var num = 0;
    var timer = null;

    var liset = ul.querySelectorAll('li');
    for(var i=0;i<liset.length;i++){
        var newli = document.createElement('li');
        ol.appendChild(newli);
        newli.addEventListener('click',function(){

        })
    }

    var newli = this.document.createElement('li');
    var newa = this.document.createElement('a');
    var newspan = this.document.createElement('span')
    newspan.style.backgroundColor = 'red';
    newa.appendChild(newspan);
    newli.appendChild(newa);
    ul.appendChild(newli);

    var olforli = ol.querySelectorAll('li');
    olforli[num].style.backgroundColor = 'white';

    div.addEventListener('mouseenter',function(){
        clearInterval(timer);
    })

    div.addEventListener('mouseleave',function(){
        timer = setInterval(function(){
            autoevent(num,ul,li,olforli,function(newnum){
                num = newnum;
            });
        },2000)
    })

    timer = setInterval(function(){
        autoevent(num,ul,li,olforli,function(newnum){
            num = newnum;
        });
    },2000)
}) 


function autoevent(num,ul,li,olforli,callback){
    num = num + 1;
    catonmove(ul,-num * li.offsetWidth,function(){
        console.log("轮播图功能测试");
    });

    if(num == 4){
        num=0;
    }

    for(var i=0;i<olforli.length;i++){
        olforli[i].style.backgroundColor = '';
    }

    olforli[num].style.backgroundColor = 'white';
    newnum = num
    callback(newnum);
}

