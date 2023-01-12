
var collection = document.querySelectorAll("button");

window.onload = giveInfo;

function giveInfo() {
  alert("Press the proper keyboard buttons to play the musical instruments 🥰");
}

// Button Press

for (var index = 0; index < collection.length; index++) {
  collection[index].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Keyboard Press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  gameOverFunction(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  if (
    key === "w" ||
    key === "a" ||
    key === "s" ||
    key === "d" ||
    key === "j" ||
    key === "k" ||
    key === "l"
  ) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

function gameOverFunction(key) {
  if (
    key === "w" ||
    key === "a" ||
    key === "s" ||
    key === "d" ||
    key === "j" ||
    key === "k" ||
    key === "l"
  ) {
  } else {
    document.querySelector("body").classList.add("game-over");
    document.querySelector("h1").innerHTML = "Game Over !!!";
    document.querySelector("h1").style.textShadow = "4px 4px black";
    document.querySelector("h1").style.color = "yellow";
    document.querySelector("span").style.display = "block";
    var audio = new Audio("sounds/gameover.mp3");
    audio.play();
    setTimeout(function () {
      alert("❌❌❌ !!! Oops you pressed the wrong button !!! ❌❌❌");
      alert("Please Reload the Page to restart your musical journey! 😐");
      audio.pause();
    }, 3000);
  }
}
