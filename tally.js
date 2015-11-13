/*Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.*/

function alphaCount (alphabet, text) {
  return alphabet
  	.toLowerCase()
    .split('')
    .reduce(function(res, char){
      var results = text.match('(' + char + ')', 'g');
      if(results !== null){
      	var count = results.length;
      	res += char + ':' + count;
      }3
      return res;
    }, '')
}

var alphabet ="aBc"
var text = "aabbccdd"
console.log(alphaCount(alphabet, text));