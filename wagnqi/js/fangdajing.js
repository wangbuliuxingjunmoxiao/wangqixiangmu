	//		OOA：拆需求
			//		放大镜:
			//			1.选择元素
			//			2.绑定进入离开事件
			//			3.显示/隐藏
			//			4.绑定移动事件
			//			5.色块跟随移动,同时计算比例
			//			6.大图跟据比例移动
						
			//		OOD：做关系，高内聚，低耦合
			//			function Magnifier(){
			////				1.选元素,存属性
			//				
			////				2.绑定进入离开事件
			//				this.addEvent();
			//			}
			//			Magnifier.prototype.addEvent = function(){
			////				正在绑定....
			////					3.显示/隐藏
			//					this.show();
			//					this.hide()
			//			}
			//			Magnifier.prototype.show = function(){
			////				4.绑定移动事件
			//				this.addMove()
			//			}
			//			Magnifier.prototype.hide = function(){
			//				
			//			}
			//			Magnifier.prototype.addMove = function(){
			////				正在绑定....
			////					5.色块跟随移动,同时计算比例
			//					this.pBoxMove()
			//			}
			//			Magnifier.prototype.pBoxMove = function(){
			////				6.大图跟据比例移动
			//				this.move()
			//			}
			//			Magnifier.prototype.move = function(){
			//				
			//			}
			//			new Magnifier()
						
			//		OOP
					function fangdajing(){
						//1.选元素,存属性
						this.sbox = document.querySelector(".s_box")
						this.pbox = document.querySelector(".s_box span")
						console.log(this.pbox)
						this.bbox = document.querySelector(".b_box")
						this.bimg = this.bbox.children[0];
						
			//				2.绑定进入离开事件
						this.addEvent();
					}
						fangdajing.prototype.addEvent = function(){
							 var that = this;
			//				正在绑定....
							this.sbox.onmouseover = function(){
							// 3-1.显示
								that.show();
							}
							this.sbox.onmouseout = function(){
									// 3-1.隐藏
								that.hide();
							}
						}
						fangdajing.prototype.show = function(){
							this.pbox.style.display = "block";
							this.bbox.style.display = "block";
							//				4.绑定移动事件
							this.addMove();
						}
						fangdajing.prototype.hide = function(){
							this.pbox.style.display = "none";
							this.bbox.style.display = "none";
						}
						
						fangdajing.prototype.addMove = function(){
							var that = this;
						//				正在绑定....
						   this.sbox.onmousemove = function(eve){
						   	 var e = eve || window.event;
						 //					5.色块跟随移动,同时计算比例
						 	that.pBoxMove(e)
						   }
						}
						fangdajing.prototype.pBoxMove = function(e){
							this.l = e.offsetX - this.pbox.offsetWidth/2;
							this.t = e.offsetY - this.pbox.offsetHeight/2;
							
							if(this.l < 0) this.l = 0;
							if(this.t < 0) this.t = 0;
							if(this.l>this.sbox.offsetWidth-this.pbox.offsetWidth){
							 this.l=this.sbox.offsetWidth - this.pbox.offsetWidth
							}
							if(this.t>this.sbox.offsetHeight-this.pbox.offsetHeight){
								this.t=this.sbox.offsetHeight-this.pbox.offsetHeight
							}
							
							
							this.pbox.style.left = this.l + "px";
							this.pbox.style.top = this.t + "px";
						
							
							this.x =this.l / (this.sbox.offsetWidth - this.pbox.offsetWidth);
							this.y =this.t / (this.sbox.offsetHeight - this.pbox.offsetHeight);
							
							
							//				6.大图跟据比例移动
							this.move()
						}
						
						fangdajing.prototype.move = function(){
							this.bimg.style.left = -this.x * (this.bimg.offsetWidth - this.bbox.offsetWidth) + "px";
							this.bimg.style.top = -this.y * (this.bimg.offsetHeight - this.bbox.offsetHeight) + "px";
						}
						
						new fangdajing();
						


















































