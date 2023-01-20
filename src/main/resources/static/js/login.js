window.addEventListener('load',function(){
    var menuenter = this.document.querySelector('.menu_enter');
    var menuregister = this.document.querySelector('.menu_register');
    var contententer = this.document.querySelector('.content_enter');
    var contentregister = this.document.querySelector('.content_register');
    var login_account = this.document.querySelector('.content_enter .lable_account input');
    var login_password = this.document.querySelector('.content_enter .lable_password input');

    var register_account = this.document.querySelector('.content_register .lable_account input');
    var register_password = this.document.querySelector('.content_register .lable_password input');
    var register_password1 = this.document.querySelector('.content_register .lable_password1 input');


    var login_btn = this.document.querySelector('.btn_login');
    var register_btn = this.document.querySelector('.btn_register');


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

    register_btn.addEventListener("click",function () {
        let email = $(register_account).val();
        let password = $(register_password).val();
        let password1 = $(register_password1).val();

        //email格式判断

        console.log(password)
        console.log(password1)

        if (password !== password1){
            alert("密码不一致，请重新输入")
            return
        }

        let user = {
            "email": email,
            "password":  password
        }

        $.post({
            'url': '/user/register',
            'data': JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(res){
                if (res.isSucceed){
                    alert(res.data)
                }else {
                    alert(res.errorMsg)
                }
            }
        })

    })
})