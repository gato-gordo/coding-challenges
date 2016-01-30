/*

All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input	=> Output
string:
"abc"	=> [ "abc", "acb", "bac", "bca", "cab", "cba" ]

*/

function allAnagrams (string) {
  return string.length === 1 ? [string] : string
    .split('')
    .reduce( (outAn, outCh, outI, outAr) =>
      outAn.concat( 
        allAnagrams( outAr.filter( (inCh, inI) => outI !== inI)
                          .join('')
                    ).map( inAn => outCh + inAn )
      ), [])
    .filter( (an, i, ans) => i === ans.lastIndexOf(an) )
}