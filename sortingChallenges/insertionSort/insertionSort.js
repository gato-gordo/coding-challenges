/*
Insertion sort is a basic sorting algorithm. Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs. It does this until it gets to the end of the array.

*/

function insertionSort (arr) {
  "use strict";
  var sortUpTo = 0;
  while(++sortUpTo < arr.length){
    for(let i = 0; i < sortUpTo; i++){
      if(arr[sortUpTo] < arr[i]){
        arr.splice(i, 0, arr.splice(sortUpTo, 1)[0]);
        break;
  } } }
  return arr;
}