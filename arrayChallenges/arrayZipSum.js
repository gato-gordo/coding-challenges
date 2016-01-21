/*

Array Zip Sum
Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

Examples
Input	Output
xs:
[ 10, 20, 30 ]
ys:
[ 1, 2, 3 ]	[ 11, 22, 33 ]
xs:
[ 100, 1 ]
ys:
[ 50, 5 ]	[ 150, 6 ]
xs:
[ 10, 20, 30 ]
ys:
[ 1, 2 ]	[ 11, 22 ]
xs:
[ 10, 20 ]
ys:
[ 1, 2, 3 ]	[ 11, 22 ]

*/


function zipSum (xs, ys) {
  var newArray = [];
  
  var stop = Math.min(ys.length, xs.length);
  
  for(var i = 0; i < stop; i++){
    newArray.push(xs[i] + ys[i]);
  }
  return newArray;
}
