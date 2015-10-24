/*

Given a roman numeral as input, write a function that converts the roman numeral
to a number and outputs it.

When a smaller numeral appears before a larger one, it becomes a subtractive
operation. You can assume only one smaller numeral may appear in front of larger
one.

You should return "null" on invalid input.

*/

function translateRomanNumeral (romanNumeral) {
  if(/[^IVXLCDM]/.test(romanNumeral)) return "null"
  var decimal = 0
  for(var i = 0; i < romanNumeral.length; i+= step){
    var step = 1,
        next = DIGIT_VALUES[romanNumeral[i + 1]]
	   cur  = DIGIT_VALUES[romanNumeral[i]]
    if(next > cur) decimal += next - cur, step = 2
    else decimal += cur
  }
  return decimal
}
