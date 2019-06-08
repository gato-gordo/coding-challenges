const assert = require('assert')

/**
* 5. Longest Palindromic Substring

Share
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

ToDo: move away from brute force

*
*/


var isPalindrome = (s) => {
    return s === s.split('').reverse().join('')
}

assert(isPalindrome('abba'), 'abba is a Palindrome')
assert(isPalindrome('a'), 'a is a Palindrome')
assert(isPalindrome(''), '\'\' is a Palindrome')
assert(!isPalindrome('aaba'), 'aaba is not a Palindrome')
assert(isPalindrome('aaa'), 'is a Palindrome')

var longestPalindrome = function(s) {
  let front = 0;
  let back = s.length;
  let count = 0;
  while (count < 1000 && back >= 0) {
  	for(let front = 0; back <= s.length; front++, back++) {
    	let subString = s.slice(front, back);
    	if (isPalindrome(subString)) {
    		return subString
    	}
  	}
  	count++;
  	back = s.length - count;
  }
 }


console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))



