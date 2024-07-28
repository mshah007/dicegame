function rollDice() {
  let player = Math.floor(Math.random() * 6) + 1;
  return player;
}

function displayDicePlayer1(player) {
  const dice = document.querySelector(".img1");
  if (player === 1) dice.src = "./images/dice1.png";
  if (player === 2) dice.src = "./images/dice2.png";
  if (player === 3) dice.src = "./images/dice3.png";
  if (player === 4) dice.src = "./images/dice4.png";
  if (player === 5) dice.src = "./images/dice5.png";
  if (player === 6) dice.src = "./images/dice6.png";
}
function displayDicePlayer2(player) {
  const dice = document.querySelector(".img2");
  if (player === 1) dice.src = "./images/dice1.png";
  if (player === 2) dice.src = "./images/dice2.png";
  if (player === 3) dice.src = "./images/dice3.png";
  if (player === 4) dice.src = "./images/dice4.png";
  if (player === 5) dice.src = "./images/dice5.png";
  if (player === 6) dice.src = "./images/dice6.png";
}
function displayStatus(p1, p2) {
  let status = document.querySelector("h2");
  if (p1 > p2) status.innerHTML = "Player 1 wins";
  if (p1 < p2) status.innerHTML = "Player 2 wins";
  if (p1 === p2) status.innerHTML = "Its a draw!";
}
let player1 = rollDice();
let player2 = rollDice();

const roll = document.querySelector("h1");
roll.addEventListener("click", () => {
  player1 = rollDice();
  player2 = rollDice();
  displayDicePlayer1(player1);
  displayDicePlayer2(player2);
  displayStatus(player1, player2);
});
