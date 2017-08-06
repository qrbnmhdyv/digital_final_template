$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$("#listBtn").attr("class", "lnr lnr-cross")
			$(".dropBtn").slideDown();
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
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});
})
$(window).ready(function(){
	$(".process").click(function() {
		$("body").animate({
			scrollTop: 1350,
		}, 1500);
	});
})


$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});



    $(".uls").draggable({
      cursor: "move", 
    	containment: "parent",
    	  stop: function() {
      if(jQuery(".uls").position().left < 10){
          jQuery(".uls").css("left", "190px");
      }else if(jQuery(".uls").position().left > 180){
          jQuery(".uls").css("left", "190px");
      }
  
    } 
    });
  $(window).ready(function() {
  })

  $(window).ready(function(){
  	$("#Success").click(function(){
  		$(".interval").animate({
  			count=[1,2,3,4];
  		}
  		for(i=0; i<10; i++){
			$(".interval").html: count[i],
			
  		})
  		
  	})
  	
})

   
