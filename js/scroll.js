window.onscroll = function() {
  if ($(window).scrollTop() < 50) {
    document.getElementById("myHeader").style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    document.getElementById("myHeader").style.backgroundColor = "#FFFFFF";
  }
  prevScrollpos = currentScrollPos;
}