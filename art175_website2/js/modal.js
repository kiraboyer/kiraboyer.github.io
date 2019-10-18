
// When the user clicks on <div>, open the popup
function myFunction(n) {
  var popup = document.getElementsByClassName("myPopup"+n);
  var p = document.querySelectorAll(".popup")[n];
 
  myFunction(p);
  // popup.classList.toggle("show");
  function myFunction(el) {
  var v = el.querySelector(".popuptext")
  v.classList.toggle('show');
}
}
