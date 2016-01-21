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
  if(command === "decode") {
    offset = (alpha.length - offset) % alpha.length;
  }
  var newMessage = '';
  for(var i = 0; i < message.length; i++){
    var alphaIndex = alpha.indexOf(message[i]);
    if(alphaIndex !== -1){
        var newIndex = (alphaIndex + offset) % alpha.length;
        newMessage +=  alpha[newIndex];
    } else {
        newMessage += message[i];
    }
  }
  return newMessage;
}

cipher("abcde", 4, "bbc", "encode");
