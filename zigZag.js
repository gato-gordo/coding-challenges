/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
        return s;
    }
    let gap = numRows - 2; // number of rows, minus first and last
    let increment = numRows + gap;  // distance travelling down and diagonal
    let chars = []; // use array for efficient push
    for (let i = 0; i < numRows; i++) {
        let toPush = i;
        let target = 0;
        while (toPush < s.length) {
            chars.push(s[toPush]);
            if (i === 0 || i === numRows - 1 ) { // first or last row
                toPush += increment;
            } else {
                target += increment;
                toPush = target - toPush;
            }
        }
    }
    return chars.join('');
};