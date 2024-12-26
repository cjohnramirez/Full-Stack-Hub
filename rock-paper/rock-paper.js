let choices = ['rock', 'paper', 'scissors'];
let choiceImg = ['raised-fist.svg', 'raised-hand.svg', 'victory-hand.svg'];
let winsCount = 0;
let loseCount = 0;
let tieCount = 0;

['rock', 'paper', 'scissors'].forEach(move => {
  document.querySelector(`.${move}-button`).addEventListener('click', () => {
    evaluateMoves(`${move}`);
  })
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    evaluateMoves('rock');
  } else if (event.key === 'p'){
    evaluateMoves('paper');
  } else if (event.key === 's'){
    evaluateMoves('scissors');
  }
}) 

function computerMove() {
  const randomNum = Math.floor(Math.random() * 3);
  let computerMove = choices[randomNum];

  return computerMove;
}

function evaluateMoves(playerMove) {
  let randomMove = computerMove();
  let outcome = '';

  if (playerMove === '') {
    alert("Please pick a choice.")
  }

  switch (playerMove) {
    case 'rock':      
      if (randomMove === 'paper'){
        outcome = 'lose';
      } else if (randomMove === 'scissors'){
        outcome = 'wins';
      } else {
        outcome = 'tie'
      }
      break;
    case 'paper':
      if (randomMove === 'rock'){
        outcome = 'wins';
      } else if (randomMove === 'scissors'){
        outcome = 'lose';
      } else {
        outcome = 'tie'
      }
      break;
    case 'scissors':
      if (randomMove === 'rock'){
        outcome = 'lose';
      } else if (randomMove === 'paper'){
        outcome = 'wins';
      } else {
        outcome = 'tie'
      }
      break;
  }

  showResult(playerMove, randomMove, outcome);
}

function showImage(move) {
  let imageSrc = '';
  switch (move) {
    case 'rock':
      imageSrc = choiceImg[0];
      break;
    case 'paper':
      imageSrc = choiceImg[1];
      break;
    case 'scissors':
      imageSrc = choiceImg[2];
      break;
  }
  return imageSrc;
}

function showResult(playerMove, computerMove, outcome) {
  if (outcome === 'wins') winsCount++;
  if (outcome === 'lose') loseCount++;
  if (outcome === 'tie') tieCount++;

  let resultsHTML = `
    <p class='title'>Result: Player ${outcome}</p>
    <div class='results-body'>
      <p>${playerMove}</p>
      <img src="${showImage(playerMove)}" alt='${playerMove}' width="50px">
      <img src="${showImage(computerMove)}" alt='${computerMove}' width="50px">
      <p>${computerMove}</p>
    </div>
    <div class='results-body'>
      <p>Score</p>
      <p>Wins: ${winsCount}</p>
      <p>Lose: ${loseCount}</p>
      <p>Tie: ${tieCount}</p>
    </div>
    <div class="special-buttons">
      <button onclick="resetScore()">Reset Score</button>
      <button onclick="autoPlay()">AutoPlay</button>
    </div>
  `;

  document.querySelector('.results').innerHTML = resultsHTML;
}

let isAutoPlaying = false

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const random1 = computerMove();
      evaluateMoves(random1);
      const additionalButton = `<button onclick="stopAutoPlay()">Stop AutoPlay</button>`
      document.querySelector('.special-buttons').innerHTML += additionalButton;
    }, 1000);
    isAutoPlaying = true;
  } 
}

function stopAutoPlay() {
  clearInterval(intervalId);
  isAutoPlaying = false;

  return isAutoPlaying;
}

function resetScore() {
  winsCount = 0;
  loseCount = 0;
  tieCount = 0;

  stopAutoPlay();
  document.querySelector('.results').innerHTML = '';
}




