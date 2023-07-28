window.onscroll = function () {
  sticky();
};

let nav = document.getElementById("header");
let navpos = nav.offsetTop;
let button = document.getElementById("headbutton");

function sticky() {
  console.log(window.scrollY, navpos);
  if (window.scrollY > navpos) {
    nav.classList.add("scrolling");
    button.classList.add("bchange");
  } else {
    nav.classList.remove("scrolling");
    button.classList.remove("bchange");
  }
}
