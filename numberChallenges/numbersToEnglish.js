/*

Number to English
Write a function numberToEnglish, it should take a number and return the number as a string using English words.

Examples
Input => Output
number:
7 => "seven"
number:
575 => "five hundred seventy-five"
number:
78193512 => "seventy-eight million one hundred ninety-three thousand five hundred twelve"

*/

function numberToEnglish (number) {
  return String(number)
    .split('').reverse().join('').match(/.{1,3}/g).reverse()
    .map(reverseTriple).map(processTriple).join(' ')
    .replace(/y\s/g, 'y-').replace(/[\s|\-]zero/g, '').trim()
}
function reverseTriple(triple){
  return triple.split('').reverse().join('')
}				 
function processTriple(triple, index, triples){
  if(notZeros(triple)) 
    return processTripleInner(triple, index, triples)
  return ''
}
function processTripleInner(triple, index, triples){
  var triple = triple.split('')
  processHundred(triple)
  var isTeen = processTens(triple)
  if(!isTeen) processOnes(triple)
  setMagnitude(triple, index, triples)
  return triple.join(' ')
}
function processOnes(triple){ 
  triple[triple.length - 1] = numbersToWords[triple[triple.length - 1]]
}
function notZeros(triple, index, triples, callback){ 
  return triple!== '000'
}
function hasHundred(triple){ 
  return triple.length === 3 && triple[0] !== '0' 
}
function processHundred(triple){
  if(hasHundred(triple)) 
    triple[0] = numbersToWords[triple[0]] + ' hundred' 
  else if (triple.length === 3) 
    triple[0] = "zero" 
}
function processTens(triple){
  if(triple.length !== 1){
    var index = triple.length === 3 ? 1 : 0,
    isTeen = hasTeen(triple, index)
    if(isTeen){ 
      triple[index] = numbersToWords[triple[index] + triple[index + 1]]
      triple.pop()
    } else { 
      if(hasTens(triple, index)) 
        triple[index] = numbersToWords[triple[index] + '0']
      else if (isZero(triple[index])) 
        triple[index] = "zero"
    }
    return isTeen;
  }
}
function setMagnitude(triple, index, triples){
  var magnitudes = {
    "2": "thousand",
    "3": "million",
    "4": "billion",
    "5": "trillion",
    "6": "quadrillion",
    "7": "quintillion"
  }
  if(magnitudes[triples.length - index]) 
    triple.push(magnitudes[triples.length - index])
}
function isZero(digit){ 
  return digit === '0'
}
function hasTens(triple, index){
  return triple[index] !== '0' && triple[index] !== '1'
}
function hasTeen(triple, index){
  return triple[index] == '1'
}