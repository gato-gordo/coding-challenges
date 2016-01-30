/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

Examples
Input	=> Output
array:
[ 1, 2, 3 ]	=> 6
array:
[ 4, -1, 5 ]	=> 8
array:
[ 10, -11, 11 ]	=> 11
array:
[ 1, 2, 3, -6, 4, 5, 6 ]	=> 15
*/

function sumArray (array) {
  return Math.max( ...array.map(highAtPos) );
}
var highAtPos = function(el, i, arr){
  arr = arr.slice();
  var conTig  = [], end = arr.length;
  while( end > i ){
    conTig.push( arr.slice(i, end--).reduce( (high, el) => high + el, 0) );
  }
  return Math.max(...conTig);
}