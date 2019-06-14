/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Look at area at ends
    // iteratively shift to middle from minimum end until higher area found or ends cross
    // toDo: find more optimization - graph?
    let left = 0;
    let right = height.length - 1;
    let min = Math.min(height[left], height[right]);
    let maxWater = min * (right - left);
    while (left < right) {
        if (height[left] === min) {
            left++;
            while (height[left] < min && left < right) {
                left++; 
            }
        } else {
            right--;
            while (height[right] < min && left < right) {
                right--;
            }
        }
        min = Math.min(height[left], height[right]);
        let water = min * (right - left);
        if (water > maxWater) {
            maxWater = water
        }
    }
    return maxWater;
};