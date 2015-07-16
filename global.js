
var header = document.getElementById("header");
var box = document.getElementById("box");
var logo = document.getElementById("wrapper__logo");

window.onscroll = shrink_header;


function shrink_header() {
  if (window.pageYOffset>100) {
    header.style.display = "block";
    header.innerHTML = '<img src ="logo.svg" width="200px">';
    }
  // if (window.pageYOffset<400) {
  //   header.style.height = "120px";
  //   logo.style.display = "block";
  // }
  if (window.pageYOffset>600) {
    pop_box();
  }
}


function pop_box() {
  if (window.pageYOffset>300) {
    box.style.display = "block";
    
  }
  if (window.pageYOffset<400) {
    box.style.display = "none";
    
  }
}




