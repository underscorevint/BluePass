
$(document).ready(function () { 
    
  var partner3images=["./img/partner-31.jpg", "./img/partner-32.jpg", "./img/partner-33.jpg"];

      $( '#menu-icon' ).on( "click", function() {
        $( '#navmenu' ).removeClass('hidden');
      });

      $( '#close-menu-icon' ).on( "click", function() {
        $( '#navmenu' ).addClass('hidden');
      });

      $( '#menu-overlay' ).on( "click", function() {
        $( '#navmenu' ).addClass('hidden');
      });

   



      setTimeout(looper,2000)

      var partner1images=["./img/partner-11.jpg", "./img/partner-12.jpg", "./img/partner-13.jpg"];

      for(i=0;i<partner1images.length;i++){
       
        $('#partners_1').delay(2000).attr("src", partner1images[i]);
  
      }

      var partner2images=["./img/partner-21.jpg", "./img/partner-22.jpg", "./img/partner-23.jpg"];

      for(i=0;i<partner2images.length;i++){
      $('#partners_2').attr("src", partner2images[i]);
      }
      


      var prt4img=["./img/partner-41.jpg", "./img/partner-42.jpg", "./img/partner-43.jpg"];

      for(i=0;i<prt4img.length;i++){
        $('#partners_4').attr("src", prt4img[i]);
      }



 $('.vessel').each(function(i){
    
    var row = $(this);

     setTimeout(function() {

        row.addClass("animated").delay(12000).queue(function(next){
            row.removeClass("animated");
//            next();
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

function looper() {
  
  var partner3images=["./img/partner-31.jpg", "./img/partner-32.jpg", "./img/partner-33.jpg"];

  for(i=0;i<partner3images.lenght;i++){
    $('#partners_3').attr("src", partner3images[i]);
    
  }

}

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