window.addEventListener('scroll',function(){
    var div  = this.document.querySelector('.navigation');
    var offersetHeight = this.window.pageYOffset;
    var spans = this.document.querySelectorAll('.navigation ul li span');

    div.style.top = 5 + offersetHeight+'px';

    if(offersetHeight <750){
        spans[0].style.backgroundColor = 'rgb(43, 137, 243)';
        spans[1].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[2].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[3].style.backgroundColor = 'rgb(255, 252, 255)';
    }else if(offersetHeight >= 750 && offersetHeight <1370){
        spans[0].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[1].style.backgroundColor = 'rgb(43, 137, 243)';
        spans[2].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[3].style.backgroundColor = 'rgb(255, 252, 255)';
    } else if(offersetHeight>=1370 && offersetHeight <1750){
        spans[0].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[1].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[2].style.backgroundColor = 'rgb(43, 137, 243)';
        spans[3].style.backgroundColor = 'rgb(255, 252, 255)';
    }else{
        spans[0].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[1].style.backgroundColor = 'rgb(255, 252, 255)';
        spans[3].style.backgroundColor = 'rgb(43, 137, 243)';
        spans[2].style.backgroundColor = 'rgb(255, 252, 255)';
    }

    spans[4].style.backgroundColor = 'rgb(255, 252, 255)';
})

window,addEventListener('load',function(){
    var spans = this.document.querySelectorAll('.navigation ul li span');
    for(i=0;i<spans.length;i++){
        spans[i].style.backgroundColor = 'rgb(255, 252, 255)';
    }

    spans[0].style.backgroundColor = 'rgb(43, 137, 243)';
})

