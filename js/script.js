/*==================================================
                PRELOADER
====================================================*/
$(window).on('load', function () { // make sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    
});


/*==================================================
                TEAM CAROUSEL
====================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //break points 
            0: {
                items:1
            },
            //break point for 480 and up
            480: {
                item: 2
            }
        }
    });
});

    /*==================================================
            PROGRESS BARS RUN QUERY ON SCROLL
    ====================================================*/

/*
    $(function () {

        $('#progress-elements').waypoint(function () {

            $('.progress-bar').each(function () {

                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                }, 1000);
            });
            this.destroy();

        }, {
            offset: 'bottom-in-view'
        });
    });
*/


/*==================================================
                RESPONSIVE tabs
====================================================*/
/*
$(function () {
    $('#services-tabs').responsiveTabs({

    });
});
*/
/*==================================================
                PORTFOLIO FILTER
====================================================*/
/*
$(window).on('load', function () {
    //Initialise ISOTOPE
    $("#isotope-container").isotope({});

    // filter items on button click

    $("#isotope-filters").on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/*==================================================
                MAGNIFIER
====================================================*/
/*
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
        }
    });
});
*/

/*==================================================
                TESTIMONIAL CAROUSEL
====================================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*==================================================
                Counter
====================================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*==================================================
                Client Section
====================================================*/
$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //break points 
            0: {
                items:2
            },
            //break point for 480 and up
            480: {
                item: 3
            },
            768:{
                items: 6
            }
        }
    });
});


/*==================================================
                NAVIGATION BAR
====================================================*/

/*Show and Hide white navigation*/

$(function () {
    
    // Show/Hide nav on page load
    showHideNav();
    
    $(window).scroll(function(){
        //Show/Hide on scroll
        showHideNav();
        
    });
    
    function showHideNav() {
        if( $(window).scrollTop() > 50 ) {
            // Show White Nav
            $(".navbar").addClass("white-nav-top");
            
            //Show dark Logo 
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            //show Back to top btn
            $("#back-to-top").fadeIn();
        
        } else {
            //Hide White nav
            $(".navbar").removeClass("white-nav-top");
            
            //Show Logo 
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
            //hide Back to top btn
            $("#back-to-top").fadeOut();
        }
    }
});

//Smooth Scrolling of Navigation

$(function() {
   $("a.smooth-scroll").click(function(event){
       event.preventDefault();
       
       //get section ID like #about #services, etc
       var section_id = $(this).attr("href");
       
       $("html, body").animate({
           scrollTop: $(section_id).offset().top - 64
       }, 1250);
   })
});

/*==================================================
                MOBILE NAVIGATION BAR
====================================================*/

$(function () {

    //Show Mobile Navigation
    $('#mobile-nav-open-btn').click(function() {
        $('#mobile-nav').css("height", "100%");
    });
    
    //Hide Mobile Navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $('#mobile-nav').css("height", "0%");
    });
        
});


/*======================================================
            HOME SECTION
========================================================*/
    $(function () {
        $('.slides').superslides({
            animation: 'fade',
            play: 5000,
            pagination: false
        });
        
        var typed = new Typed(".typed", {
            strings: ["Web Development","Graphic Designing","Digital Marketing","Content Writing","Event Management","Photography","Interior Designing" ],
            typeSpeed: 70,
            loop: true,
            startDelay: 1000,
            showCursor: false
        })
        
    });

/* 
==================================================
    timeline js
=====================================================
*/
$(function () {
	var inputs = $(".input");
	var paras = $(".description-flex-container").find("p");
	$(inputs).click(function () {
		var t = $(this),
			ind = t.index(),
			matchedPara = $(paras).eq(ind);

		$(t).add(matchedPara).addClass("active");
		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass("active");
	});
});










