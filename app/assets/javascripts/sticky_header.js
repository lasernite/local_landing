// Sticky Top Bar on Scroll Down

var topNavEffect = function() {
	var  top_nav = $(".top_nav");
    top_nav_scrolled = "top_nav_scrolled";
    top_nav_color_1 = "top_nav_color_1"
    section1 = $('.section1').height();
    section2 = $('.section2').height();
    section3 = $('.section3').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > section1 - 1 && $(this).scrollTop() < section1 + section2 + section3 - 54 ) {
	    top_nav.addClass(top_nav_scrolled);
	    top_nav.addClass(top_nav_color_1);
	  } 
	  else if ( $(this).scrollTop() >= section1 + section2 + section3 - 54 ) {
	  	top_nav.addClass(top_nav_scrolled);
	  	top_nav.removeClass(top_nav_color_1);
	  }
	  else {
	    top_nav.removeClass(top_nav_scrolled);
	    top_nav.removeClass(top_nav_color_1);
	  }
	});
}

$(document).ready(topNavEffect);
$(window).resize(topNavEffect);


