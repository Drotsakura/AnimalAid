window.addEventListener('load',function(){
    let userItem =JSON.parse(window.localStorage.getItem('userItem'));
    //名称设置
    let usernames = this.document.querySelectorAll('.username');
    for (i=0;i<usernames.length;i++){
        $( usernames[i]).html(userItem.username);
    }
})