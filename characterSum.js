/*

Character Sum
Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

Examples
Input	Output
str:
"123"	6
str:
"0101"	2
str:
"so cool!!1!"	1

*/

function charSum(str){
  var runningTotal = 0;
  for (var i=0; i < str.length;i++) {
    if (!isNaN (Number(str[i]))) {
        runningTotal = runningTotal + Number(str[i]);
    }
  }
  return runningTotal;
}