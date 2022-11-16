const game = () => {
  let pScore = 0;
  let cScore = 0;
  document.getElementById("poin").style.visibility="hidden";
  //game mulai
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      document.getElementById("poin").style.visibility="visible";
    });
  };
  //game dimainkan
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const hands = document.querySelectorAll(".hands img");

    //pilihan computer
    const computerOptions = ["batu", "kertas", "gunting"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //computer memilih
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        compareHands(this.textContent, computerChoice);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //text
    const winner = document.querySelector(".winner");
    //untuk seri
    if (playerChoice === computerChoice) {
      winner.textContent = "Match seri!";
      return;
    }
    //cek batu
    if (playerChoice === "batu") {
      if (computerChoice === "gunting") {
        winner.textContent = "Kamu menang!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer menang!";
        cScore++;
        updateScore();
        return;
      }
    }
    //cek kertas
    if (playerChoice === "kertas") {
      if (computerChoice === "gunting") {
        winner.textContent = "Computer menang!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu menang!";
        pScore++;
        updateScore();
        return;
      }
    }
    //cek gunting
    if (playerChoice === "gunting") {
      if (computerChoice === "batu") {
        winner.textContent = "Computer menang!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu menang!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //panggil fungsi dalam
  startGame();
  playMatch();
};

//game dimulai
game();