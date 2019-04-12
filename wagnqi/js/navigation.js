
//;(function($){
//  "use strict";
//
//  $.fn.nav = function(){
//      console.log(this)
//      this.children(".nav-l").hover(function(){
//      	
//      	
//          $(this).children(".nav-l-q").stop().show().parent().siblings().children("div").stop().hide();
//          console.log(1)
//      },function(){
//          $(this).children("div").stop().hide()
//      })
//      
//      return this;
//  }
//})(jQuery);


$(".nav-l-q").children("nav-l-q-a").hover(function(){
	$(this).children("ul").stop().show();
	

},function(){
	
	$(this).children("ul").stop().slideUp;
})




























