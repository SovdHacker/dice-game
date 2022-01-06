// eeljiig hadgalah huwisagch, negdugeer toglogch = 0 ; hoyrdugaar toglogch = 1 ;
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;

// shoo ali talaaraa buusaniig hadgalah huwisagch, 1-6 gesen huwisagch olgono
var dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;
//program ehlehed beltgey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
