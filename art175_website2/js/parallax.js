 /* 
See https://codepen.io/MarcelSchulz/full/lCvwq

The effect doens't appear as nice when viewing in split view :-)

Fully working version can also be found at (http://schulzmarcel.de/x/drafts/parallax).

*/
 window.onload = function(){ 
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var oddImgPos = scrollTop / 3 + 'px';
    var evenImgPos = scrollTop / 2.5 + 'px';
    $('figure:odd').find(".child").css('transform', 'translateY(' + evenImgPos + ')');
}); };