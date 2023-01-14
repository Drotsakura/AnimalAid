function catonmove(obj,stop,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (stop - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step); 
        if(obj.offsetLeft == stop){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    },15);
}