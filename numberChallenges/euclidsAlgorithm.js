/* Euclid's Algorithm

The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. For example, 21 is the GCD of 252 and 105 (252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also the GCD of 105 and 147 = 252 − 105. Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until one of the two numbers reaches zero. When that occurs, the other number (the one that is not zero) is the GCD of the original two numbers.

Extra credit: think of a replacement for iterative substraction that can accomplish compute the gcd in constant time.
*/

function gcd(a, b){
	if(a > b){
		var temp = a;
		a = b;
		b = temp;
	}
	if(a === 0){
		return b;
	} else {
		return gcd(a, b % a);
	}
}

