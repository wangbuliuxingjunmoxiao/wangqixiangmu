//function Register(options){
//      this.btn = options.btn
//      this.user = options.user
//      this.pass = options.pass
//      this.msg = options.msg
//      this.url = options.url
//      this.init()
//  }
//  Register.prototype.init = function(){
//      var that = this;
//      this.btn.onclick = function(){
//          that.load()
//      }
//  }
//  Register.prototype.load = function(){
//      var that = this;
//      ajaxPost(this.url,{
//          username:this.user.value,
//          password:this.pass.value
//      }).then(function(res){
//          console.log(res)
//          that.msg.innerHTML = JSON.parse(res).msg;
//          if(JSON.parse(res).msg=="注册成功"){
//          setTimeout(() => {
//              location.href = "login.html";
//          }, 1000);
//          }      
//          
//      },function(code){
//          console.log(code,"前端的ajax请求失败，有可能是网络原因或接口错误，或服务器问题，反正不一定是注册失败")
//      })
//  }
//  new Register({
//      btn:document.getElementById("btn"),
//      user:document.getElementById("user"),
//      pass:document.getElementById("pass"),
//      msg:document.getElementById("msg"),
//      url:"/api/reg"
//  })


 class Register{
			 	constructor(){
			 	this.url = "http://www.icodeilife.cn/ctrl/register.php"; 18438617609
			 		
			 		this.init();
			 	}
			 	init(){
			 		var that = this;
			 		$("#btn").click(function(){
			 			that.load()
			 		})
			 	}
			 	load(){
			 		$.ajax({
			 			url:this.url,
			 			success:function(res){
			 				switch(res){
			 					case "0":
			 							$(".deng").html("用户名重复");break;
			 					case "1":
			 							$(".deng").html("注册成功，3秒后跳转到登录");
			 							setTimeout(()=>{
			 								location.href = "login.html";
			 							},3000)
			 							break;
			 					case "2":
			 							$(".deng").html("数据不全");break;
			 				}
			 			},
			 			data:{
			 				tel:$("#user").val(),
			 				pass:$("#pass").val()
			 			}
			 		})
			 	}
			 }
			 new Register;













































