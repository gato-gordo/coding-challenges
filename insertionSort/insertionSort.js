function insertionSort (arr) {
  var sortUpTo  = 0
  while(++sortUpTo < arr.length){
    for(var i = 0; i < sortUpTo; i++){
      if(arr[sortUpTo] < arr[i]) 
        arr.splice(i, 0, arr.splice(sortUpTo, 1)[0]); break
    }
  }
  return arr
}