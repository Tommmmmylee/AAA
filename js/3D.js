$("#rightBtn").on("click",function(){
				$("#header ul").toggle();
//				$("#header ul li").eq(0).addClass("active").siblings().removeClass("active");
			})
			window.onresize=function(){
				console.log($("#rightBtn").css("display"))
				if($("html").width()>786 && $("#header ul").css("display")=="none"){
					$("#header ul").show()
					console.log($("html").width())
				}
			}
		$("video").on("click",function(){
          if($(this).get(0).paused){
            $(this).get(0).play()
            $(".content1_wz").hide();
          }else{
            $(this).get(0).pause()
            $(".content1_wz").show();
          }
        })
        $("video").bind("ended",function(){
          // $(this).get(0).currentTime=0;
          $(this).get(0).load()
        })
$("#footer section img").on("click",move);
			function move() {
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//为了浏览器的兼容性，documentElement兼容ie、火狐
				document.body.scrollTop=scrollTop-100;
				var raf = window.requestAnimationFrame(move);
				if(scrollTop<=0) {
					window.cancelAnimationFrame(raf);
				}
				console.log(scrollTop);
}