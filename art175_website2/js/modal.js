// Attributes 

 
//https://www.w3schools.com/howto/howto_js_popup.asp
//https://stackoverflow.com/questions/38240534/want-popup-message-over-each-div-tag/38240732 

	 //Attributes End

// When the user clicks on <div>, open the popup
function myFunction(n) {
  var popup = document.getElementsByClassName("myPopup"+n);
  var p = document.querySelectorAll(".popup")[n];
 
  myFunction(p);
 
  function myFunction(el) {
  var v = el.querySelector(".popuptext")
  v.classList.toggle('show');
}
}
