const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
      board[clickedId] = 'X';
  } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
      board[clickedId] = 'O'
  }
  console.log(board)
  const topLeft = board[0];
  const topMiddle = board[1];
  const topRight = board[2];
  const middleLeft = board [3];
  const middleCenter = board [4];
  const middleRight = board [5];
  const bottomLeft = board [6];
  const bottomMiddle = board [7];
  const bottomRight = board [8];
  let gameOver = false;

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
      alert(`${topLeft} is the winner!`);
      gameOver = true;
      return;
  };

  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
      alert(`${middleLeft} is the winner!`);
      gameOver = true;
      return;
  };

  if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
      alert (`${bottomLeft} is the winner!`);
      gameOver = true;
      return;
  };

  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert (`${topLeft} is the winner!`);
    gameOver = true;
    return;
  };

  if (topMiddle !== undefined && topMiddle === middleCenter && topMiddle === bottomMiddle) {
    alert (`${topMiddle} is the winner!`);
    gameOver = true;
    return;
  };

  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert (`${topRight} is the winner!`);
    gameOver = true;
    return;
  };

  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert (`${topLeft} is the winner!`);
    gameOver = true;
    return;
  };

  if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
    alert (`${topRight} is the winner!`);
    gameOver = true;
    return;
  };

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert(`Cat's game, nobody wins :(`)
  }
}

function boardReset() {
  if (gameOver = true) {
    
  }

}