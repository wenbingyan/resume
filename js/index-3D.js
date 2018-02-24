(function(win, doc) {
    win.addEventListener('resize', change, false);

    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 20 / 667 + 'px';
    } 
    change();
   
})(window, document);
$(function(){
	 $('.word').stop().animate({width:1100},{duration:9000});
	 $('.menu-btn').on('click',function(){
	 	if($('.m-content').css('display')=='block'){
	 		$('.m-content').stop().animate({opacity:0},{duration:800,complete:function(){
	 			$('.m-content').css('display','none');
	 		}});
	 		
	 		$('.menu-btn .third').css('transform','translateX(0px)');
		 	$('.menu-btn .first').css({'transform':'rotate(0deg)','transform-origin':'left center'});
		 	$('.menu-btn .second').css({'transform':'rotate(0deg)','transform-origin':'left center'});
	 		
	 	}else{	 				
	 		$('.m-content').css('display','block');
	 		$('.m-content').stop().animate({opacity:1},{duration:800});
	 		
	 		$('.menu-btn .third').css('transform','translateX(-2rem)');
		 	$('.menu-btn .first').css({'transform':'rotate(45deg)','transform-origin':'left center'});
		 	$('.menu-btn .second').css({'transform':'rotate(-45deg)','transform-origin':'left center'});
	 		
	 	}
	 	
	 })
 })
//Me
window.onload=function(){
	
};
function rnd(m,n){
	return parseInt(m+Math.random()*(n-m))
}
