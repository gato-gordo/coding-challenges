/*
	Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.
*/

var pipe = function(){
  var a = Array.prototype.slice.call(arguments);
  return a.length === 1 ? function(){ return a[0].apply(this, arguments) } :
    function(){
      return pipe.apply(this, a.slice(1))(a[0].apply(this, arguments));
    };
};