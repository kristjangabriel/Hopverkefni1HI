window.onscroll = function() {
  if ($(window).scrollTop() < 50) {
    document.getElementById("myHeader").style.backgroundColor = "rgba(0,0,0,0)";
  } else {
    document.getElementById("myHeader").style.backgroundColor = "#FFFFFF";
  }
  prevScrollpos = currentScrollPos;
}

function dropdown() {
  document.getElementById("dropdownLinks").classList.toggle("show");
  document.getElementById("burger-menu").classList.toggle("show-close");
  document.getElementById("myHeader").style.backgroundColor = "#FFFFFF";
}