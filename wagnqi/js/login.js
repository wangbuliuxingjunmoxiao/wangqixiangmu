//  function Login(options){
//      this.btn = options.btn
//      this.user = options.user
//      this.pass = options.pass
//      this.msg = options.msg
//      this.url = options.url
//
//      this.type = Math.random();
//
//      this.init()
//  }
//  Login.prototype.init = function(){
//      var that = this;
//      this.btn.onclick = function(){
//          that.load()
//      }
//  }
//  Login.prototype.load = function(){
//      var that = this;
//      ajaxPost(this.url,{
//          username:this.user.value,
//          password:this.pass.value
//      }).then(function(res){
//                  console.log(JSON.parse(res))
//                   
//                  if(JSON.parse(res).msg == "登录成功"){
//                      that.msg.innerHTML = JSON.parse(res).msg;
//                      setTimeout(function(){
//                          window.location.href="index.html";
//                      },1000)
//                  }
//                  
//         
//      },function(code){
//          console.log(code,"前端的ajax请求失败，有可能是网络原因或接口错误，或服务器问题，反正不一定是登录失败")
//      })
//  }
//  new Login({
//      btn:document.getElementById("btn"),
//      user:document.getElementById("user"),
//      pass:document.getElementById("pass"),
//      msg:document.getElementById("msg"),
//      url:"/api/login"
//  })


 class Login{
			 	constructor(){
			 		this.url = "http://www.icodeilife.cn/ctrl/login.php";
			 		
			 		this.init()
			 	}
			 	init(){
			 		 var that = this;
			 		 $("#btn").click(function(){
			 		 	that.load()
			 		 })
			 	}
			 	load(){
			 		var that = this;
			 		$.ajax({
			 			url:this.url,
			 			data:{
			 				user:$("#user").val(),
			 				pass:$("#pass").val()
			 			},
			 			success:function(res){
			 				switch(res){
			 					case "0":
			 						$(".zhu").html("用户名密码不符");break;
			 					case "1":
			 						$(".zhu").html("重新登录");break;
			 					default:
			 						//								因为接口问题,返回json数据时表示成功,json数据不好判断,所以,直接使用defaultf判断
			 						$(".zhu").html("登录成功，得到自己的用户数据");
			 						//登录成功自动跳转登录页面
			 						setTimeout(()=>{
			 								location.href = "index.html";
			 							},3000)
			 						
			 						that.res = JSON.parse(res)
			 						console.log(that.res)
			 				}
			 			}
			 		
			 		})
			 		}
			 	}
			 
			  new Login;























