/*  Given an array of positive numbers and a positive number ‘S’, 
    find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
    Return 0, if no such subarray exists.

    Example 1:
    Input: [2, 1, 5, 2, 3, 2], S=7 
    Output: 2
    Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
   
    Example 2:
    Input: [2, 1, 5, 2, 8], S=7 
    Output: 1
    Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
  
    Example 3:
    Input: [3, 4, 1, 1, 6], S=8 
    Output: 3
    Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

const smallest_subarray_with_given_sum = function(s, arr){
    var windowStart = 0;
    var smallestWindowLength = Number.POSITIVE_INFINITY;
    var windowSum = 0;
    
    for(var windowEnd=0; windowEnd < arr.length; windowEnd++){
        // add digit
        windowSum += arr[windowEnd];

        // shrink window until windowSum is smaller than s -- which allows window to slide up after
        while(windowSum >= s){
            smallestWindowLength = Math.min(smallestWindowLength, windowEnd - windowStart + 1); // +1 since array length is 0-indexed
            // remove element from start of window
            windowSum -= arr[windowStart];
            // move window up 
            windowStart++;
        }

    }   
    // If no such answer, return 0
    if(smallestWindowLength == Number.POSITIVE_INFINITY){
        return 0;
    }
    // else return smallest subarray length
    return smallestWindowLength;
}

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]));
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]));
