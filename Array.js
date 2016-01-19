Array.prototype.flatten = function(){
	return this.reduce(function(flat, val, i, hilly){
		Array.isArray(val) ? flat.concat(val.flatten()) : flat.concat(val);
	}, []);
}

Array.prototype.map = function(mappingRelation){
	return this.reduce(function(accumulator, value){
		return accumulator.concat(mappingRelation(value));
	}, []);
}

Array.prototype.filter = function(predicate){
	return this.reduce(function(accumulator, value){
		return predicate(value) ? accumulator.concat(value) : accumulator;
	}, []);
}

console.log([1, 2, 3, 4, 5].filter(function(val){
	return val % 2 === 0; 
}));

//console.log([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, [11, 12]]], 13 ].flatten())