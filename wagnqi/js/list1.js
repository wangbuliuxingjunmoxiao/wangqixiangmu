
class List {
		    	constructor(options){
		    		//1.解析数据
		    		this.cont = options.cont;
		    		this.url = options.url;
		    		this.lists=options.lists;
//		    		console.log(this.lists)
//		    		console.log(this.cont)
		    		//2.请求数据
		    		this.load();	
		    		
		    	//5.绑定事件
		    		this.addEvent();
		    	}
		    	load(){
//		    		console.log(1)
		    		
		    		var that = this;
		    		ajax({
		    			url:this.url,
		    			success:function(res){
//		    				console.log(res)
		    				//3.请求成功之后解析数据，并渲染页面
		    				that.res = JSON.parse(res)
		    				console.log(1)
		    				that.display()
		    			}
		    		})
		    	}
				display(){
					//4.遍历数据，拼接结构，渲染数据
					var str = "";
					for(var i=0;i<this.res.length;i++){
						str += `
						    <li>
					  		   <div class="p_img">
					  					<a href="#"><img src="${this.res[i].src}"></a>
					  					<a href="#" class="btn-buy" id="cont" index="${this.res[i].goodsId}">加入购物车</a>
					  			</div>
					  			
					  			<div class="p_info">
					  				 <a href="#">${this.res[i].name}</a>
					  				 <span>¥${this.res[i].price}</span>
					  			</div>
					  		</li>`;
								
					}
					this.lists.innerHTML = str;
				}  
				
				addEvent(){ 
//					console.log(1)`
					var that = this;
					this.lists.addEventListener("click",function(eve){
						//console.log(1)
//						console.log(3)
//console.log(eve.target)
						if(eve.target.nodeName == "A"){
							console.log(1)
							
							//6.被电击的时候，获取货号，存cookie
							that.id = eve.target.getAttribute("index");
							console.log(that.id)
							that.setCookie()
							
						}
					})
				}
				setCookie(){
					//console.log(1)
//				因为要使用一条cookie存商品,所以数据选择数组里面放对象[{},{}]
				this.goods = getCookie("goods");
//				情况1:第一次添加
				if(this.goods == ""){
					this.goods = [{
						id:this.id,
						num:1
					}];
				}else{
//					情况2:不是第一次添加
					this.goods = JSON.parse(this.goods);
//					新情况1：这次点击的是老数据
					var onoff = true;
					this.goods.forEach((v)=>{
						if(v.id == this.id){
							v.num++
							onoff = false;
						}
					})
					
//					新情况2：这次点击的是新数据
					if(onoff){
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}
//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
				setCookie("goods",JSON.stringify(this.goods))
			}
//				所有关于数组的操作结束之后,将数组转成字符再设置到cookie中
//				setCookie("goods",JSON.stringify(this.goods))
//	
				}
			
		    new List({
		    	lists:document.querySelector(".lists"),
		    	cont:document.getElementById("cont"),
		    	url:"./data/goods.json"
		    })


































