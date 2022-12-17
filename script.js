let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("test").style.top = "0";
  } else {
    document.getElementById("test").style.top = "-62px";
  }
  prevScrollpos = currentScrollPos;
}