/**
 * @param {number} x
 * @return {boolean}
 */

/**
* With string transform
**/
// var isPalindrome = function(x) {
//     const strNum = String(x);
//     let pointA = 0;
//     let pointB = strNum.length - 1;
//     while (pointA <= pointB) {
//         if (strNum[pointA] !== strNum[pointB]) {
//             return false;
//         }
//         pointA++;
//         pointB--;
//     }
//     return true  
// };

/**
* Without string transform
*/
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const digits = [];
    while (x > 0) {
        const digit = x % 10;
        digits.push(digit)
        x /= 10;
        if (x === 0) {  // case where last digit is 0
            digits.push(0);
            break;
        }
        x = Math.floor(x);
    }
    
    let pointA = 0;
    let pointB = digits.length - 1;
    while (pointA <= pointB) {
        if (digits[pointA] !== digits[pointB]) {
            return false;
        }
        pointA++;
        pointB--;
    }
    return true  
};