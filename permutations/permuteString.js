/*
Given a string, return all the permutations of that string in alphabetical order.
*/

function permutations(str){
  if(str.length === 1) return [str];
  return  str
    .split('')
    .reduce(function(perms, chValOuter, chIndOuter, chArr){
    	return 	perms.concat(
                permutations(
                	chArr
                	  .filter(function(chValInner, chIndInner){ 
                	  	return chIndOuter !== chIndInner; 
                    } )
                    .join('')
                )
                .map(function(innerPerm)
                	return chValOuter + innerPerm;
                })
							);
    }, [])
    .sort();
}

function permutations(str){
	if(str.length === 1) return [str];
	var outerPerms = [];
	for(var i = 0; i &lt; str.length; i++){
		var innerPerms = permutations(str.slice(0, i) + str.slice(i + 1));
		for(var j = 0; j &lt; innerPerms.length; j++){
			outerPerms.push(str[i] + innerPerms[j]);
		}
	}
	return outerPerms.sort();
}

console.log(permutations("aeef"));


