/*

Balanced Parenthesis
Given a string, return true if it contains balanced parenthesis ().

Examples
Input Output
string:
"(x + y) - (4)" true
string:
"(((10 ) ()) ((?)(:)))" true
string:
"(50)(" false
string:
""  true

*/

function isBalanced (string) {
  var opens = 0;
  for(var i = 0; i < string.length; i++){
    if(string[i] === '('){
      opens++;
    } else if (string[i] === ')'){
      opens--;
      if(opens < 0){
        return false
      }
    }
  }
  return opens === 0;
}