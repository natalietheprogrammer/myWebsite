var website = {};
var lastscroll = 0;
var smallMenuShown = false;

website.init = function() {
	website.fixNav();
	website.listenForMenuClick();
	// website.listenForNavSectionClick();
}

// fix nav bar after x amt of scroll down
website.fixNav = function() {
	$(window).scroll(function (event) {

	    var scroll = $(window).scrollTop();

	    if (scroll > 444) {
	    	$('nav').addClass('fixedNav');
	    } else {
	    	if (scroll == 0) {
	    		$('nav').removeClass('fixedNav');
	    	}
	    	else if (lastscroll - scroll > 0) {
	    		console.log("scrolling up");
	    	} else {
	    		$('nav').removeClass('fixedNav');
	    	}
	    }

   		lastscroll = scroll;

	});
}

// add smooth scroll effect when nav clicked
$(document).on('click', 'a', function(event){
    event.preventDefault();
    // var clickedButtonClass = $(this).attr('class');
    // var scroll = $(window).scrollTop();

    // if (  clickedButtonClass  == "home link" && scroll == 00 ) {
    // 	// dont do anything
    // } else {
    	$('nav').addClass('fixedNav');
   		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    // }

});

// burger menu listener / activator
website.listenForMenuClick = function() {
	$('.fa-bars').on('click', function() {
		smallMenuShown = !smallMenuShown;
		var showMenu = smallMenuShown ? 'block' : "none";
		$('.menu-open').css('display', showMenu);

		website.listenForPopUpXButton();
	})

}

// pop-up menu listener / closer 
website.listenForPopUpXButton = function() {
	$('.fa-times').on('click', function() {
		console.log("Menu:", !smallMenuShown);
		smallMenuShown = !smallMenuShown;
		var showMenu = smallMenuShown ? 'block' : "none";
		$('.menu-open').css('display', showMenu);
	})
}

// when html loaded, start js
$(document).ready(function() {
    console.log( "init" );
	website.init();
});