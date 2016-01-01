/*
Given a string, return all the permutations of that string in alphabetical order.
*/

function permutations(str){
	if(str.length === 1) return [str];
	return 	str
					.split('')
					.reduce(function(perms, ch, i, strArr){
						return 	perms
											.push(permutations(
												strArr
													.filter(function(ch2) { 
														return ch !== ch2; 
													} )
											.join('')
											)
											.map(function(perm){
												return ch + perm;
											})) && perms;
					}, [])
					.reduce(function(flattened, twoD){
						twoD.forEach(function(arry){
							flattened.push(arry);
						});
						return flattened;
					}, [])
					.sort();
}

console.log(permutations("abc"));


