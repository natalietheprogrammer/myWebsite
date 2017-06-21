var website = {};
var lastscroll = 0;
var smallMenuShown = false;

website.init = function() {
	website.fixNav();
	website.listenForMenuClick();
	website.listenForPopUpXButton();
	website.popUpSmoothScroll();
}

// fix nav bar after x amt of scroll down
website.fixNav = function() {
	$(window).scroll(function (event) {

		var screenWidth = $(window).width() + 15;


	// stick nav scroll bar on small screen
	if (screenWidth <= 525) {
	
		var scroll = $(window).scrollTop();
		// if in pop-up nav, fix nav bar
		if (smallMenuShown == true) {
			console.log('pop-up fixed nav success');
			$('nav').addClass('fixedNav');
		}
		// otherwise implement small screen nav stick at scroll >200
		else {
		    if (scroll > 200) {
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
		}
	// stick nav scroll bar on large screen
	} else {
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
	  }

   		lastscroll = scroll;

	});
}

// add smooth scroll effect when nav clicked
// only targets larger screen (non-mobile) section buttons
$('.RHS-nav').on('click', 'a', function(event){
    event.preventDefault();

    console.log($(this).attr('href'));

    let clickedButtonRef = $(this).attr('href');
    let clickedButtonClass = $(this).attr('class');
    var scroll = $(window).scrollTop();

    // if home button clicked, and at top of screen do nothing
    // otherwise implement smooth scroll
    if ( clickedButtonRef == "#home" && scroll == 0 ) {
    	// do nothing
    }
    else {
    	$('nav').addClass('fixedNav');
   		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    }
});


// burger menu listener / activator
website.listenForMenuClick = function() {
	$('.fa-bars').on('click', function() {
		smallMenuShown = true;
		var showMenu = smallMenuShown ? 'block' : "none";
		$('.menu-open').css('display', showMenu);

		// call pop-up listeners

		smallMenuShown = true;
		
	})

}

// website.popUpActivated = function() {
// 	website.listenForPopUpXButton();
// 	website.popUpSmoothScroll();
// }

// add smooth scroll effect when nav clicked
// only targets pop-up nav (inside burger menu) buttons
website.popUpSmoothScroll = function() {

	$('.menu-open').on('click', 'a', function(event){
	    event.preventDefault();

		let menuOpenClickedButtonRef = $(this).attr('href');
		var scroll = $(window).scrollTop();

		// if ( menuOpenClickedButtonRef === "#home-snap" && scroll === 0) {
		// 	// smooth scroll to home, no offset
		// 	console.log('clicked home  SUPER CHECK');
   		
		// 	// just close menu (occurs after the 'else' below)

		// }
		// otherwise implement smooth scroll
		// else {

	    	// smooth scroll to section (no offset)
	    	$('nav').addClass('fixedNav');
	   		$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    	}, 300);
		// }

			// $('a[href*="#"]:not([href="#"])').click(function() {
			//          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			//          && location.hostname == this.hostname) {
			//              var target = $(this.hash);
			//                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			//                if (target.length) {
			//                  $('html, body').animate({
			//                    scrollTop: target.offset().top
			//                  }, 1000);
			//                  return false;
			//                }
			//          }
			//      });

		
			// close small menu
	   		console.log("Menu:", !smallMenuShown);
			smallMenuShown = false;
			var showMenu = smallMenuShown ? 'block' : "none";
			$('.menu-open').css('display', showMenu);
    
	});
}



// pop-up menu listener / closer 
website.listenForPopUpXButton = function() {
	$('.fa-times').on('click', function() {
		console.log("Menu:", !smallMenuShown);
		smallMenuShown = false;
		var showMenu = smallMenuShown ? 'block' : "none";
		$('.menu-open').css('display', showMenu);
	})
}

// when html loaded, start js
$(document).ready(function() {
    console.log( "init" );
	website.init();
});