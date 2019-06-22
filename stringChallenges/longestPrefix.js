/**
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    const baseString = strs[0];
    const chars = [];
    const others = strs.slice(1);
    for (let i = 0; i < baseString.length; i++) {
        for (let str of others) {
        		// Either other char or undefined
            if (baseString[i] !== str[i]) {
                return chars.join('');
            }
        }
        chars.push(baseString[i]);
    }
    return chars.join('');
};