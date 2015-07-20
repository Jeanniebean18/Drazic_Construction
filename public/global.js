
var header = document.getElementById("header");
var box = document.getElementById("box");
var logo = document.getElementById("wrapper__logo");
var icons = document.getElementById("icons_container");

window.onscroll = shrink_header;


function shrink_header() {
  if (window.pageYOffset>150) {
    header.style.backgroundColor = "#272626";
    header.innerHTML = '<img src="logo_header.svg" width="150px" class="header_logo"> <div id="contact_info">michael@drazicconstruction.com 402.590.6365</div>';
    }
  if (window.pageYOffset>200) {
    show_icons();
    
  }
  if (window.pageYOffset>700) {
    pop_box();
  }

}


function pop_box() {
  // if (window.pageYOffset>300) {
    box.style.display = "block";
    
  // }
 //  if (window.pageYOffset<400) {
    // box.style.display = "none";
    
  // }
}

function show_icons() {
  // if (window.pageYOffset>300) {
    icons.style.visibility = "visible";
    
    
  }




