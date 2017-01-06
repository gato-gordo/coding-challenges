
/*
Alphabetic Anagrams
In an array of every possible anagram of a given string, what index would the original string occupy?

Consider an anagram as any sequence of letters. For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, RESISTANCE/ANCESTRIES, which happen to both be dictionary words; for our purposes “SISTANERCE” is also a “word” composed of the same letters as these two).

Given a word, return its index number.

Here is the catch: Your function should be able to accept any word 35 letters or less in length (possibly with some letters repeated), and take no more than 5000 milliseconds to run.

Examples
Input	Output
string:
"BAEBEE"	12
string:
"ABBS"	1
string:
"BABS"	4
string:
"ARCTIC"	42
string:
"STARK"	92

*/

function anagramPosition (string) {


	function explore(string){
		if(string.length === 1) return 0;
		var strOrig = string.toLowerCase()
		var strSorted = sort(strOrig);
		var numCombos = factorial(string.length);
  	var anagramsPerLetter = numCombos / string.length;
  	var start = strSorted.indexOf(strOrig[0]) * anagramsPerLetter;

  	return start + explore(string.slice(1));
  }

  return 1 + explore(string);

}

function sort(str){
	return str.split('').sort().join('');
}

function factorial(num){
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

console.log(anagramPosition('BABS'));