// // var statusBox = document.getElementById("statusBox");
// var statusText = document.getElementById("statusText");
// var audioElm = document.getElementById("soundTour");
// var playing = false;
// // var audioElm = $('#soundTour').get(0);
// function handler(entries, observer) {
//   for (entry of entries) {
//     console.log(entry);

//     statusText.textContent = entry.isIntersecting;

//     if (entry.isIntersecting) {
//       audioElm.play();
//       playing = true;
//     } else {
//       audioElm.pause();
//       playing = false;
//     }
//   }
// }

// /* By default, invokes the handler whenever:
//    1. Any part of the target enters the viewport
//    2. The last part of the target leaves the viewport */

// let observer = new IntersectionObserver(handler);
// observer.observe(document.getElementById("target"));

var playing = false;
var audioElm = new Audio ("#soundTour");
// $('#soundTour').get(0);
 $(window).scroll(function() 
// window.onscroll = function()
{
  var pageScroll = $(window).scrollTop();
    // var pageScroll = window.scrollTop;
  if(!playing && pageScroll > 500 && pageScroll < 3000){
    audioElm.play();
    playing = true;
  }else if(pageScroll > 3000 || pageScroll < 500){
    audioElm.pause();
    playing = false;
  }
 })
