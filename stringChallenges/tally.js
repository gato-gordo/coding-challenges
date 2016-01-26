/*Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

Examples
Input Output
alphabet:
"aBc"
text:
"aabbccdd" 
=>  "a:2,b:2,c:2"
alphabet:
"x"
text:
"Racer X is my friend :)" 
=> "x:1"
alphabet:
"123"
text:
"o hai"
=> "no matches"
*/

function alphaCount (alphabet, text) {
  text = text.toLowerCase().split('');
  return  alphabet
            .toLowerCase()
            .split('')
            .reduce( 
              function(tString, lett) {
                var matches = text.filter( 
                  function(inLett){
                    return lett === inLett;
                  }).length;
                if(matches) tString +=  lett + ":" + matches + ",";
                return tString;
              }, '')
            .slice(0, -1) || "no matches";
}