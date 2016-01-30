/*

Even Occurence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Examples
Input =>	Output
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	=>2
arr:
[ "cat", "dog", "dig", "cat" ] =>	"cat"



*/


function evenOccurence (arr) {
  var c = {};
  arr.forEach( el => c[el] ? c[el]++ : c[el] = 1 );
  return arr.find( el => c[el] % 2 === 0 ) || null;
}