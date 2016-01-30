/*

REFACTOR SOLUTION PLEASE

Telephone Words
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

Examples
Input => Output
digitString:
"0002"  => [ "000A", "000B", "000C" ]
digitString:
"1123"  => [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]

*/

function telephoneWords (digitString) {
  
  if(!digitString || digitString.length === 0){
    return [];
  }
  
  var digitPossibilities = {
    '0': ['0'],
    '1': ['1'],
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z']
  }
  
  var digitArray = digitString.split('');
  var telephoneWords = [];
  
  var digit = digitArray.pop();
  var paths = digitPossibilities[digit];
  paths.forEach(function(path){
      telephoneWords.push(path);
  });
  
  while(digitArray.length){
    digit = digitArray.pop();
    paths = digitPossibilities[digit];
    var newTelephoneWords = [];
    paths.forEach(function(path){
      telephoneWords.forEach(function(tw){
        newTelephoneWords.push(path + tw);
      });
    });
    telephoneWords = newTelephoneWords;
  }

  return telephoneWords;
}