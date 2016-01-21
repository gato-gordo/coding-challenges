/*

Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

Examples

[ [ 5 ], [ [ ] ] ] => 2
[ 10, 20, 30, 40 ] => 1
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] => 4
[ ] => 0
[ [ [ ] ] ] => 0

*/


function arrayception (array) {
  var depths = [0];
  var recurse = function(array, depth){
    var depth = depth || 1;
    for(var i = 0; i < array.length; i++){
      if (Array.isArray(array[i])) { recurse(array[i], depth + 1); }
      else { depths.push(depth); }
    }
  }
  recurse(array);
  return Math.max.apply(null, depths);
}


/*
doesn't return 0 on array of empty arrays

function arrayception (array, deepest) {
  deepest = deepest + 1 || 0;
  return array.reduce(function(depth, cur){
    if(Array.isArray(cur) && cur.length > 0){
      return Math.max(depth, arrayception(cur, deepest));
    }
    return Math.max(depth, deepest + 1);
  }, deepest);
}

*/