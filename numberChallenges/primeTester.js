/*

A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.

*/

function primeTester (n) {
  if(   n < 2     ) return false;
  if(  n === 2    ) return true ; 
  if( n % 2 === 0 ) return false;
  
  var end = Math.sqrt(n), 
      test = 3;
      
  while( test <= end ){
    if( n % test  === 0) return false;
    test += 2;
  }
  
  return true;
}