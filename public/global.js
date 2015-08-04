
var menu = document.getElementById("menu")
var hamburger = document.getElementById("hamburger")

function shrink_header()
{window.pageYOffset>200&&hide_arrow(),window.pageYOffset>475,window.pageYOffset>750&&pop_box(),window.pageYOffset>1300&&show_form()}function pop_box(){box.style.display="block"}function show_form(){form.style.visibility="visible",form.setAttribute("class"," animated pulse")}function hide_arrow(){arrow.setAttribute("class"," animated fadeOutDown")}var header=document.getElementById("header"),box=document.getElementById("box"),logo=document.getElementById("wrapper__logo"),icons=document.getElementById("icons_container"),icons2=document.getElementById("icons_container2"),icons3=document.getElementById("icons_container3"),form=document.getElementById("form"),arrow=document.getElementById("arrow");window.onscroll=shrink_header;


hamburger.onclick = toggle_display1;
menu.onclick = toggle_display2;

function toggle_display1() {
  
  if (menu.style.display == "none") {
    menu.style.display = "block";
  }
  else {
    menu.style.display ="none";
    
  }
}

function toggle_display2() {
  
  menu.style.display = "none"
}