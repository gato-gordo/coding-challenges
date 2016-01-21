/*

Given an array of negative/positive integers, return the element in the center position of the array.

If the array has an even number of elements, return the average of the two middle elements instead.

Examples
Input	Output
numbers:
[ 200, 5, 100 ]	5
numbers:
[ 10, 20, 30, 40 ]	25

*/

function middle (numbers) {
    var middle = numbers.length  / 2;
    var chopped = Math.floor(middle);
    if(numbers.length % / 2 === 0){
        return  (numbers[middle] + numbers[middle  - 1]) / 2 ;
    } else { 
        return numbers[chopped];
    }
}