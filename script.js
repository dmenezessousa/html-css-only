const btnToggle = document.querySelector("#btn-toggle");
const toggleMe = document.querySelector("body");

btnToggle.onclick = function () {
  switch (toggleMe.style.backgroundColor) {
    case "antiquewhite":
      toggleMe.style.backgroundColor = "white";
      break;
    case "white":
      toggleMe.style.backgroundColor = "antiquewhite";
      break;
    default:
      toggleMe.style.backgroundColor = "antiquewhite";
      break;
  }
};

const btnToggle2 = document.querySelector("#btn-toggle2");
const toggleMe2 = document.querySelector("a");

btnToggle2.onclick = function () {
  switch (toggleMe2.style.color) {
    case "black":
      toggleMe2.style.color = "white";
      break;
    case "white":
      toggleMe2.style.color = "black";
      break;
    default:
      toggleMe2.style.color = "black";
      break;
  }
};
