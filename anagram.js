function isAnagram (a, b) {
	return proc(a) === proc(b)
}
function proc(str){
  return str
  				.replace(/\s/g, '')
  				.toLowerCase()
  				.split('')
  				.sort()
  				.join()
}

console.log(isAnagram('serbia', 'arsbie'))