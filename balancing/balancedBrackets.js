/*

Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

Examples
Input Output
str:
"(x + y) - (4)" true
str:
"(x + y) - (4)" true
str:
"(((10 ) ()) ((?)(:)))" true
str:
"[{()}]"  true
str:
"(50)(" false

*/

function isBalanced (str) {
  var openers = ['{', '(', '['];
  var closers = ['}', ')', ']'];
  var opens   = [];
  return str.match(/[\{\}\[\]\(\)]/g)
            .every(function(delimiter){
              var openIndex = openers.indexOf(delimiter)
              if(openIndex > -1){
                opens.push(delimiter);
                return true;
              } else {
                var closeIndex = closers.indexOf(delimiter);
                var lastOpened =  opens.pop();
                return lastOpened && closeIndex === openers.indexOf(lastOpened);
              }
            }) && opens.length === 0;
}