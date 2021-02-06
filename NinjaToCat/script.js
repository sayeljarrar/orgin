console.log("JavaScript is attached");

$(document).ready(function(){
	$(".a").click(function(){
		$(this).attr("src", "img/ninja0.png");
	})
	$(".b").click(function(){
		$(this).attr("src", "img/ninja1.png");
	})
	$(".c").click(function(){
		$(this).attr("src", "img/ninja2.png");
	})
	$(".d").click(function(){
		$(this).attr("src", "img/ninja3.png");
	})
	$(".e").click(function(){
		$(this).attr("src", "img/ninja4.png");
	})
	$( "#datepicker" ).datepicker();
})
