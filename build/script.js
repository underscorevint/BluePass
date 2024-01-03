
$(document).ready(function () { 
    
 
      $( '#menu-icon' ).on( "click", function() {
        $( '#navmenu' ).removeClass('hidden');
      });

      $( '#close-menu-icon' ).on( "click", function() {
        $( '#navmenu' ).addClass('hidden');
      });

      $( '#menu-overlay' ).on( "click", function() {
        $( '#navmenu' ).addClass('hidden');
      });

 $('.vessel').each(function(i){
    
    var row = $(this);

     setTimeout(function() {

        row.addClass("animated").delay(12000).queue(function(next){
            row.removeClass("animated");
            next();
        });

    }, 12000*i);

  });

 // var i;
 // for (i = 0; i < 5; ++i) {

 //   $("#ship-"+i).addClass("animated");

 //    setTimeout(function() {

 //       $("#ship-"+i+1).removeClass("animated");

 //   }, 12000);

//}

//$("#ship-a").addClass("animated").delay(12000).queue(function(next){
//    $(this).removeClass("animated");
//    next();
//});


 //     });

//      $( '#blue-pass' ).on( "mouseenter", function() {
 //       alert('!');

 //      $('#ship-a').toggleClass('animated');

 //     });

 //     $( '#blue-pass' ).on( "click", function() {
 //       alert('!');

 //      $('#ship-a').toggleClass('animated');

 //    });
//
}); 



//function reveal() {
//    var reveals = document.querySelectorAll("#blue-pass");
//    for (var i = 0; i < reveals.length; i++) {
//      var windowHeight = window.innerHeight;
//      var elementTop = reveals[i].getBoundingClientRect().top;
//      var elementVisible = 150;
//      if (elementTop < windowHeight - elementVisible) {
//        alert('!');
//        reveals[i].classList.add("active");
//      } else {
//        reveals[i].classList.remove("active");
//      }
//    }
//  }

//  window.addEventListener("scroll", reveal);