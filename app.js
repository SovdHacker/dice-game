// eeljiig hadgalah huwisagch, negdugeer toglogch = 0 ; hoyrdugaar toglogch = 1 ;
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;

// shoo ali talaaraa buusaniig hadgalah huwisagch, 1-6 gesen huwisagch olgono

// document.querySelector("#score-0").textContent = dice;
//program ehlehed beltgey
var diceDom = document.querySelector(".dice");
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
