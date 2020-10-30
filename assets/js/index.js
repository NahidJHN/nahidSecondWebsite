
//jqueryFunction Here
$(document).ready(function () {
  //activate owl-carousel
  $('.owl-carousel').owlCarousel({
    margin: 15,
    autoplay: true,
    loop: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    nav: true,
    autoHeight: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
//counterUp js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
})


// activate magific plugin
$('.imageGalleryContainer').magnificPopup({
  delegate: 'a',
  type:'image',
  gallery:{
    enabled:true
  }
});
})


// activate AOS
 AOS.init();


//  bars
let bars=document.querySelector('#clickBars')
let manuText=document.querySelector('.span.menuText')
let navbars=document.querySelector('.nav ul')
let nav=document.querySelector('.nav')


bars.addEventListener('click',function(){
  navbars.classList.toggle('navHeight')

})

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})