/*

Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Examples
Input	Output
string:
"aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
string:
"mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
string:
""	[ ]

*/

function characterFrequency (string) {
  var charStore = {}
  string.split('').forEach(function(char){
     charStore[char] = !charStore[char] ?  1 : charStore[char] + 1;
  });
  var toSort = []
  for(var charKey in charStore) {
    toSort.push([charKey, charStore[charKey]])
  }
  return toSort.sort(compare)
}
function compare(a, b) {
  if (a[1]  >  b[1]) return -1;
  if (a[1]  <  b[1]) return  1;
  if (a[1] === b[1]) return  a[0] < b[0] ? -1 : 1 ;
} 
