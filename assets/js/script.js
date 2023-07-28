window.onscroll = function () {
  sticky();
};

let nav = document.getElementById("header");
let navpos = nav.offsetTop;
let button = document.getElementById("headbutton");

function sticky() {
  if (window.scrollY >= 300) {
    nav.classList.add("scrolling");
    button.classList.add("bchange");
  } else {
    nav.classList.remove("scrolling");
    button.classList.remove("bchange");
  }
}
