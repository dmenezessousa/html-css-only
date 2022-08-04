const btnToggle = document.querySelector("#btn-toggle");
const toggleMe = document.querySelector("body");

btnToggle.onclick = function () {
  switch (toggleMe.style.backgroundColor) {
    case "white":
      toggleMe.style.backgroundColor = "antiquewhite";
      break;
    case "antiquewhite":
      toggleMe.style.backgroundColor = "white";
      break;
    default:
      toggleMe.style.backgroundColor = "white";
      break;
  }
};

const btnToggle2 = document.querySelector("#btn-toggle2");
const toggleMe2 = document.querySelector("a");

btnToggle2.onclick = function () {
  switch (toggleMe2.style.color) {
    case "white":
      toggleMe2.style.color = "black";
      break;
    case "black":
      toggleMe2.style.color = "white";
      break;
    default:
      toggleMe2.style.color = "white";
      break;
  }
};

function greetUser() {
  const max_count = 5;
  const user = prompt("What is your name?");

  if (user == "") {
    alert("Please enter your name");
    if (max_count > 0) {
      greetUser();
    }
  } else if (isNaN(user) == false) {
    alert("Please enter your name, Only Letters!");
    if (max_count > 0) {
      greetUser();
    }
  } else {
    document.write("Hello, and Wecolme " + user + "!");
  }
}

function isOldEnough() {
  const max_count = 5;
  const age = prompt("How old are you?");
  if (age == 65) {
    alert("OK You Can Eat for FREE Enjoy!");
  } else if (age == "") {
    alert("You must enter your age!");
    if (max_count > 0) {
      isOldEnough();
    }
  } else if (age > 65) {
    alert("You are Too old to Be Eating This Kinda of Food!");
    if (max_count > 0) {
      isOldEnough();
    }
  } else if (isNaN(age)) {
    alert("Please enter your age, Only Numbers!");
    if (max_count > 0) {
      isOldEnough();
    }
  } else {
    alert(
      "You are not old enough to Eat for Free! Come Back when you are OLDER!"
    );
    if (max_count > 0) {
      isOldEnough();
    }
  }
}
