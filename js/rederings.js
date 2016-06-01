;$(function() {
	var index = 0;//当前图片的下标
	var perWidth = document.documentElement.clientWidth;//每张图片的宽度
	
	function tab() {
		$("#inner").stop().animate({
			left:-index * perWidth
		})
		$("#paganation span").eq(index).addClass("active").siblings().removeClass("active");
	}
	
	function prev() {
		index--;
		if(index < 0) {
			index = $("#paganation span").size() -1;
		}
		tab();
	}
	
	function next() {
		index++;
		if(index > $("#paganation span").size() -1) {
			index = 0;
		}
		tab();
	}
	
	//给小圆点添加事件
	$("#paganation span").on("click",function() {
		index = $(this).index();
		tab();
	})
	
	//下一张
	$(".right-arrow").on("click",next);
	
	//上一张
	$(".left-arrow").on("click",prev);
	var timer = setInterval(next,4000);
	
	$("#wrap").hover(function() {
		clearInterval(timer);
	},function() {
		timer = setInterval(next,4000)
	})
	
	//瀑布流
	var pubu = document.getElementById("pubu");
	var list = pubu.getElementsByTagName("li");
	function rnd(min,max) {
		return parseInt(Math.random() * (max - min + 1)) + min;
	}
	function createImg() {
		for(var i = 0; i < 13; i++) {
			//找高度最小的li
			var minList = list[0];
			for(var j = 0; j < list.length; j++) {
				if(minList.offsetHeight > list[j].offsetHeight) {
					minList = list[j];
				}
			}
			//将创建的块添加到高度最小的li
			var a = rnd(1,12);
			var newImg = document.createElement("img");
			newImg.src = "img/png1/tu"+a+".png";
			minList.appendChild(newImg);
		}
	}
	createImg();
	
	window.onscroll = function() {
		//var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(pubu.getBoundingClientRect().bottom <= document.documentElement.clientHeight) {
			//pubu的视口坐标,bottom 小于等于窗口的实际高度
			createImg();
		}
	}
	
	//点击变大图
	$("#pubu").on("click","img",function() {
		var img = $(this).clone();
		$("#pubuMask").show();
		img.appendTo($("#tanchuang")).siblings().remove();
		$("#tanchuang").css({
			marginLeft:-img.context.naturalWidth/2,
			marginTop:-img.context.naturalHeight/2
		})
		$("#pubuMask").on("click",function() {
			$(this).hide();//点击蒙层，蒙层消失
		})
		$("#tanchuang").on("click",function(e) {
			e.stopPropagation();//阻止冒泡
		})
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
})