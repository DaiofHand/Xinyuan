$(function(){
	//默认显示第一张
	$(".img li").first(0).show();
	//手动hover控制
	$(".btn-num li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		i = index;
		$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
	//设置定时器自动轮播
	var i = 0;
	var t = setInterval(move,1500)
	//核心向右运动函数
	function move(){
	i++;
	if(i>3){i=0;}
	$(".btn-num li").eq(i).addClass("active").siblings().removeClass("active");
	$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	//核心向左
	function moveL(){
	i--;
	if(i==-1){i=3;}
	$(".btn-num li").eq(i).addClass("active").siblings().removeClass("active");
	$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	//鼠标移入图像停止轮播与移出后继续进行轮播
	$(".out").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(move,1500)
	})
	//左右按钮点击移动
	$(".out .btn-left").click(function () {
		moveL();
    });
    $(".out .btn-right").click(function () {
        move()
    });
})
