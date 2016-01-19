/*

Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.


*/

var compose = function(){
  var a =  Array.prototype.slice.call(arguments);
  return a.length === 1 ? function() { return a[0].apply(this, arguments) } :
    function(){
      var e =  a.length - 1;
      return compose.apply(this, a.slice(0, e))(a[e].apply(this, arguments));
    };
};