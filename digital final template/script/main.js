$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$(".dropBtn").slideDown("slow");
			$("#listBtn").attr("class", "lnr lnr-cross")
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});
});



$(window).ready(function(){
	$(".topBtn").click(function() {
		$(window).animate({
			scrollTop: 0,
		}, 1000);
	});
})

$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});

var list = $(".tor")

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",function(){
		var element = $(this).index();
		for (var o = list.length; o > element; o--) {
			$(list[o]).removeClass("change");
		}
		for (var j = 0; j <= element; j++) {
			$(list[j]).attr("class", "change");
		}
	})
}
