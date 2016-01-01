/*
Given a string, return all the permutations of that string in alphabetical order.
*/

function permutations(str){
	var perms = [];
	if(str.length === 1) perms.push(str);
	str.split('').forEach(function(ch, i, strArr){
		var others = strArr
									.filter(function(ch2) { return ch !== ch2; } )
									.join('');
		permutations(others).forEach(function(perm){
			perms.push(ch + perm);
		});
	});
	return perms.sort();
}

console.log(permutations("abc"));


