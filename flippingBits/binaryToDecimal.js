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
  var decimal = 0;
  for(var i = n.length - 1, e = 0; i >= 0; i--, e++){
    if(n[i] === '1') decimal += Math.pow(2, e);
  }
  return decimal;
}