var topNavResize = function() {
	var  top_nav = $(".top_nav");
    top_nav_scrolled = "top_nav_scrolled";
    section1 = $('.section1').height();
    main_text = $('.main_text').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > section1 ) {
	    top_nav.addClass(top_nav_scrolled);
	  } else {
	    top_nav.removeClass(top_nav_scrolled);
	  }
	});
}

$(document).ready(topNavResize);
$(window).resize(topNavResize);


