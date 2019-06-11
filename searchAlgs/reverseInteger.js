const assert = require('assert');

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    let revNum = Math.abs(x);
    let digits = [];
    while (revNum > 0) {
        let digit = revNum % 10;
        digits.push(digit);
        revNum = Math.floor(revNum / 10);
    }
    let power = digits.length - 1;
    let sum = digits.reduce((curSum, curDigit) => {
        return curSum + curDigit * Math.pow(10, power--);
    }, 0)
    if (isNegative) {
        sum *= -1;
        return sum < -Math.pow(2, 31) ? 0 : sum;
    }
    return sum > Math.pow(2, 31) - 1 ? 0 : sum;
};