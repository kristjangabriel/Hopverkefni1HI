var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myHeader").style.backgroundColor = "#FAFAFA";
  } else {
    document.getElementById("myHeader").style.backgroundColor = "#FFFFFF";
  }
  prevScrollpos = currentScrollPos;
}