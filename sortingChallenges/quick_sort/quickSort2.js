function quickSort(array, low, high){
    if(low < high){
        var pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    } 
}
function partition(array, low, high){
    var pivot = array[high];
    var swapIndex = low;
    var temp;
    for(var i = low; i < high; i++){
        if(array[i] <= pivot){
            temp = array[i];
            array[i] = array[swapIndex];
            array[swapIndex] = temp;
            swapIndex++;
        }
    }
    temp = array[swapIndex];
    array[swapIndex] = array[high];
    array[high] = temp;
    return swapIndex;
}