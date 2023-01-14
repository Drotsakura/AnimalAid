window.addEventListener('load',function(){
    var menuenter = this.document.querySelector('.menu_enter');
    var menuregister = this.document.querySelector('.menu_register');
    var contententer = this.document.querySelector('.content_enter');
    var contentregister = this.document.querySelector('.content_register');
    var login_account = this.document.querySelector('.lable_account input');
    var login_password = this.document.querySelector('.lable_password input');
    var login_btn = this.document.querySelector('.btn_login');


    menuenter.addEventListener('click',function(){
        contententer.style.display = 'block';
        contentregister.style.display = 'none';
    })

    menuregister.addEventListener('click',function(){
        contententer.style.display = 'none';
        contentregister.style.display = 'block';
    })

    login_btn.addEventListener('click',function(){
      // let user = {
      //   email:  $(login_account).val(),
      //   password:   $(login_password).val()
      // }

        let user = {
            email: "root@163.com",
            password:  "123456"
        }

      $.post({
          'url': '/user/login',
          'data': JSON.stringify(user),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(res){
              if (res.isSucceed){
                  window.localStorage.removeItem('userItem');
                  window.localStorage.setItem('userItem',JSON.stringify(res.data));
                  window.location.replace('../index.html');
              }else {
                  alert(res.errorMsg)
              }
        }
      })

    })
})