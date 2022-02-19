var comp1 = document.getElementById("comp1");
var comp2 = document.getElementById("comp2");
var comp3 = document.getElementById("comp3");
var comp4 = document.getElementById("comp4");
var comp5 = document.getElementById("comp5");
var comp6 = document.getElementById("comp6");
var comp7 = document.getElementById("comp7");
var comp8 = document.getElementById("comp8");
var ht1 = document.getElementById("ht1");
var ht2 = document.getElementById("ht2");
var ht3 = document.getElementById("ht3");


comp1.addEventListener("click", function () {
  sessionStorage.setItem("score", 1);
});
comp2.addEventListener("click", function () {
  sessionStorage.setItem("score", 2);
});
comp3.addEventListener("click", function () {
  sessionStorage.setItem("score", 3);
});
comp4.addEventListener("click", function () {
  sessionStorage.setItem("score", 4);
});
comp5.addEventListener("click", function () {
  sessionStorage.setItem("score", 5);
});
comp6.addEventListener("click", function () {
  sessionStorage.setItem("score", 6);
});
comp7.addEventListener("click", function () {
  sessionStorage.setItem("score", 7);
});
comp8.addEventListener("click", function () {
    sessionStorage.setItem("score", 8);
  });
ht1.addEventListener("click", function () {
    sessionStorage.setItem("score", 9);
  });
ht2.addEventListener("click", function () {
    sessionStorage.setItem("score", 10);
  });
ht3.addEventListener("click", function () {
    sessionStorage.setItem("score", 11);
  });
    