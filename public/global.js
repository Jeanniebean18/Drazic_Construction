
var header = document.getElementById("header");
var box = document.getElementById("box");

var logo = document.getElementById("wrapper__logo");
var icons = document.getElementById("icons_container");
var icons2 = document.getElementById("icons_container2");
var icons3 = document.getElementById("icons_container3");
var form = document.getElementById("form");
var arrow = document.getElementById("arrow");

window.onscroll = shrink_header;


function shrink_header() {
  if (window.pageYOffset>100) {
    hide_arrow();
  }
  // if (window.pageYOffset>200) {
  //   show_icons();
  // }
  //
  if (window.pageYOffset>475) {
    // show_icons2();
  }
  //
  if (window.pageYOffset>750) {
    // show_icons3();
    pop_box();
  }

  if (window.pageYOffset>1600) {
    show_form();
    // pop_box();
  }

}

//
function pop_box() {

  box.style.display = "block";
}

// function pop_box2() {
//
//   box2.style.display = "block";
// }
//
// function show_icons() {
//   icons.style.visibility = "visible"
//   icons.setAttribute("class", " animated bounceIn");
// }
//
// function show_icons2() {
//   icons2.style.visibility = "visible"
//   icons2.setAttribute("class", " animated bounceIn");
// }
//
// function show_icons3() {
//   icons3.style.visibility = "visible"
//   icons3.setAttribute("class", " animated bounceIn");
// }

function show_form() {
  form.style.visibility = "visible"
  form.setAttribute("class", " animated slideInLeft");
}

function hide_arrow() {
  // arrow.style.visibility = "hidden"
  arrow.setAttribute("class", " animated fadeOutDownBig");
  
}





