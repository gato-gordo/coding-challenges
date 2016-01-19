/*

Given an array of arrays, return all elements in a single array. You must use recursion.

*/

function flatten (arrays, call) {
  call = call + 1 || 0;
  if(arrays.length === 0 && !call) return null;
  return arrays.reduce(function(flat, cur){
    if(!Array.isArray(cur)) return flat.concat(cur);
    return flat.concat(flatten(cur, call));
  }, []);
}

Array.prototype.flatten = function(){
	return this.reduce(function(flat, val, i, hilly){
		Array.isArray(val) ? flat.concat(val.flatten()) : flat.concat(val);
	}, []);
}