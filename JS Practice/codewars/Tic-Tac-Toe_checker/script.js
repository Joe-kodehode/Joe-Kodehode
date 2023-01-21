let board = [
  [1, 2, 1],
  [1, 2, 2],
  [2, 1, 1],
];

function isSolved(board) {
  for (const p of [1, 2]) {
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === p && board[1][i] === p && board[2][i] === p) {
        return p;
      }
      if (board[i][0] === p && board[i][1] === p && board[i][2] === p) {
        return p;
      }
    }
    if (board[0][0] === p && board[1][1] === p && board[2][2] === p) {
      return p;
    }
    if (board[0][2] === p && board[1][1] === p && board[2][0] === p) {
      return p;
    }
  }

  return board.map((row) => row.every((e) => e !== 0)).every((e) => e) ? 0 : -1;
}
isSolved(board);
