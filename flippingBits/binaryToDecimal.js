/*

Binary to Decimal
Given a number n (represented as a binary number string), convert n to base 10.

Examples
Input	Output
n:
"0"	0
n:
"1"	1
n:
"10"	2
n:
"11"	3
n:
"100"	4
n:
"101"	5
n:
"110"	6
n:
"111"	7
n:
"1000"	8

*/

function binaryToDecimal (n) {
  var binary = 0, place = 0;
  while(n.length){
    if(charToBit(n.slice(n.length - 1))){
      binary += Math.pow(2, place);
    }
    place++, n = n.slice(0, n.length - 1);
  }
  return binary;
}
function charToBit(char){
  return char === '1' ? 1 : 0;
}