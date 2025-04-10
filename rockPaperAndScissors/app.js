const computerInput = document.getElementById("computer");
const playBtn = document.getElementById("play-btn");

function showResult() {
   const playerInput = document.getElementById("user").value;
   const arr = ["ROCK", "PAPER", "SCISSOR"];

   if (!playerInput) {
      alert("Enter some value");
      return;
   }

   const playerValue = playerInput.toUpperCase();
   const computerValue = arr[Math.floor(Math.random() * arr.length)];

   computerInput.value = computerValue;

   if (playerValue === computerValue) {
      alert("Match Tie!");
   } else if (
      (playerValue === "ROCK" && computerValue === "SCISSOR") ||
      (playerValue === "PAPER" && computerValue === "ROCK") ||
      (playerValue === "SCISSOR" && computerValue === "PAPER")
   ) {
      alert("You win");
   } else {
      alert("Computer wins");
   }
}

playBtn.addEventListener('click', showResult);
