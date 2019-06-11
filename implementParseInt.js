/***
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
*/

function isNumeric (char) {
    return /\d/.test(char)
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let isNegative = false;
    let pointer = 0;
    while (str[pointer] === ' ') {
        pointer++;
    }
    if (str[pointer] === '-') {
        isNegative = true;
        pointer++;
    } else if (str[pointer] === '+') {
        pointer++;
    }
    if (typeof str[pointer] === 'string' && !isNumeric(str[pointer])) {
        return 0
    }
    let intDigits = [];
    while (isNumeric(str[pointer])) {
        intDigits.push(str[pointer++])
    }
    let power = intDigits.length - 1;
    let sum = intDigits.reduce((curSum, curVal) => curSum + curVal * Math.pow(10, power--), 0);
    if (isNegative) {
        sum *= -1;
        const min = -Math.pow(2, 31);
        return sum < min ? min : sum;
    }
    const max = Math.pow(2, 31) - 1; 
    return sum > max ? max : sum;
};