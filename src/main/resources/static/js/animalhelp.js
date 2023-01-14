window.addEventListener('scroll',function(){
    var div  = this.document.querySelector('.sendnew');
    var offersetHeight = this.window.pageYOffset;

    div.style.top = 2 + offersetHeight+'px';
    console.log(offersetHeight);
    console.log(div);

})
