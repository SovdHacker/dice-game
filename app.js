// Тоглоом дууссан эсэхийг шалгах
var isGameOver;

// eeljiig hadgalah huwisagch, negdugeer toglogch = 0 ; hoyrdugaar toglogch = 1 ;
var activePlayer;
//toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores;
//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore;
var diceDom = document.querySelector(".dice");
gameInit();
// Шоог шидэх эвент бий болголоо.
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver === false) {
    // shoo ali talaaraa buusaniig hadgalah huwisagch, 1-6 gesen huwisagch olgono
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шоонд харгалзах зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    // Тоглогчийн ээлжийн оноог өөрчлөнөө.
    if (diceNumber !== 1) {
      //1-ээс ялгаатай тоо буулаа.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      //1 буусан бол тоглогчийн ээлжийг шилжүүлнэ.
      toglogchiinEelj();
    }
  }
});
// HOLD towchnii eventiig ajiluullah
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    //уг тоглогчийн авсан оноог оруулах

    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //уг тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 100) {
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      diceDom.style.display = "none";
    } else {
      toglogchiinEelj();
    }
  }
  // тоглогчийн ээлжийг солино.
});
function toglogchiinEelj() {
  // ээлжийн оноог нь 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
// Шинэ тоглоом эхлүүлэх товчны эвент
document.querySelector(".btn-new").addEventListener("click", function () {
  gameInit();
});
function gameInit() {
  isGameOver = false;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  // document.querySelector("#score-0").textContent = dice;
  //program ehlehed beltgey

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
}
