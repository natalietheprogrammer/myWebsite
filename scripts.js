var website = {};
var lastscroll = 0;

website.init = function() {
	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll > 444) {
	    	$('nav').addClass('fixedNav');
	    } else {
	    	if (lastscroll - scroll > 0) {
	    		console.log("scrolling up");
	    	} else {
	    		$('nav').removeClass('fixedNav');
	    	}
	    }
   		lastscroll = scroll;

	});
}

$(document).ready(function() {
	website.init();
    console.log( "init" );
});