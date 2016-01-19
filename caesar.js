/*


alpha:
"abcde"
offset:
1
message:
"bbc"
command:
"encode"	"ccd"
alpha:
"abcde"
offset:
2
message:
"bbc"
command:
"encode"	"dde"
alpha:
"abcde"
offset:
4
message:
"bbc"
command:
"encode"	"aab"
alpha:
"abcde"
offset:
1
message:
"hello there"
command:
"encode"	"hallo thara"
alpha:
"abcde"
offset:
1
message:
"hallo thara"
command:
"decode"	"hello there"
alpha:
"x y"
offset:
1
message:
"xyz xyz"
command:
"encode"


*/


function cipher (alpha, offset, message, command) {
  if(command === "decode") offset = -offset;
  var chars = alpha.split('');
  var newMessage = '';
  for(var i = 0; i < message.length; i++){
    var ch = message[i];
    var alphaIndex = chars.indexOf(ch);
    if(alphaIndex !== -1){
        var newIndex = alphaIndex + offset;
        console.log(newIndex);
        if(newIndex > alpha.length - 1) newIndex = newIndex % alpha.length; 
        if(newIndex < 0) newIndex = alpha.length + offset;
        console.log(newIndex);
        newMessage +=  alpha[newIndex];
    } else {
        newMessage +=ch;
    }
  }
  return newMessage;
}
cipher("abcde", 4, "bbc", "encode");
