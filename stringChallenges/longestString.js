/**

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (typeof s !== 'string') {
        throw new TypeError('lengthOfLongestSubstring expects single string argument')
    } else if (!s.length) {
        return 0
    }
    let longest = 1
    let curString // use for comparing length
    let curStringCache // use tracking uniq chars
    /**
    	Nested loop.  
    	Outer loop sets a new char at index i to start counting uniq chars in substring
    */
    for (let i = 0; i < s.length - 1; i++) {
    		// If no string remaining could be longer than 'longest',
    		// then end loop
        if (s.length - i < longest) {
            break
        }
        curString = s[i]
        curStringCache = {
            [s[i]]: true
        }
        // Starting after i, we use inner loop to find how
        // long substring without repeats is.
        let j = i + 1
        let foundRepeat = false
        while (j < s.length && !foundRepeat) {
            if (!curStringCache[s[j]]) {
                curString += s[j]
                curStringCache[s[j]] = true
                j++
            } else {
                foundRepeat = true
            }
        }
        // Reset longest if current substring longer
        if (curString.length > longest) {
            longest = curString.length
        }
    }
    return longest
};