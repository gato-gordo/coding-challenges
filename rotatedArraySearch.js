/*
Rotated Array Search
If you have a sorted array, a rotated version of that array is the sorted array rotated some number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2] (rotated right twice). Each rotated array has a single pivot point where the groups of values to the left and right are sorted, but the sorting does not continue accross the pivot.



Given a rotated, sorted array, your task is to efficiently find the index of an element within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array. For simplicity, you can assume that there are no duplicate elements in the array.
*/

function rotatedArraySearch (rotated, target) {
  var start   = 0,
      end     = rotated.length - 1,
      calcMid = function(){
                 return Math.floor((end - start) / 2) + start
                },
      mid     = calcMid(),
      bisect  = function(){
                  if( target >  rotated[mid] ) {
                    if(target < rotated[end] || target > rotated[start]){
                      start = mid + 1;
                    } else {
                      end = mid - 1;
                    }
                  }
                  if ( target < rotated[mid] ){
                    if(target > rotated[start] || target < rotated[end]) {
                      end = mid - 1;
                    } else {
                      start = mid + 1;
                    }
                  }
                }
  while(start <= end){
    if (target === rotated[mid]) break
    bisect()
    mid = calcMid()
  }
  return target === rotated[mid] ? mid : -1
}

//start 0, end = 6, mid 3
//start 0, end = 2, mid 1
//45123
//console.log(rotatedArraySearch([ 4, 5, 6, 0, 1, 2, 3 ], 100));
//console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2));
console.log(rotatedArraySearch([3, 4, 5, 6, 7, 1, 2], 3));
//console.log(rotatedArraySearch([0, 1, 2], 2));
