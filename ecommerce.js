var bar = document.getElementById("bar");
var close = document.getElementById("close");
var nav = document.getElementsByClassName("navbar")[0];


bar.addEventListener("click", function() {
  nav.classList.toggle("active");
});

close.addEventListener("click", function() {
    nav.classList.toggle("active");
  });