/*

Sudoku Checker
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9. 
More information here.

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.


*/

function sudokuCheck (boardStr) {
  var board   = makeBoard(boardStr),
      isValid = checkRows(board) && checkCols(board) &&  checkGrids(board);
  return isValid ? "solved" : "invalid";
}
function makeBoard(str){ return str.split('\n').map( row => row.split('') )  }
function makeCols(board){ return range(9).map( c => board.map( r => r[c] ) ) }
function makeGrids(board){
  var grids = [];
  for(var row = 0; row < board.length; row += 3){
    for(var col = 0; col < board.length; col += 3){
      grid = [];
      for(var i = row; i < row + 3; i++){
        for(var j = col; j < col + 3; j ++){
          grid.push(board[i][j]);
      } }
      grids.push(grid);
  } }
  return grids;
}
function checkRows(board){ return board.every( row => row.every(uniq) ) }
function checkCols(board){ return checkRows(makeCols(board))  }
function checkGrids(board){ return checkRows(makeGrids(board)) }
function uniq(el, i, arry){ return arry.indexOf(el) === arry.lastIndexOf(el) }
function range(end, start, step){
  start = start || 0, step = step || 1;
  var nums = [];
  for(var i = start; i < end; i += step) nums.push(i);
  return nums;
}