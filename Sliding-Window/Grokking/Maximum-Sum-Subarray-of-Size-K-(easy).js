/*  Given an array of positive numbers and a positive number ‘k’, 
    find the maximum sum of any contiguous subarray of size ‘k’.

    Example 1:

    Input: [2, 1, 5, 1, 3, 2], k=3 
    Output: 9
    Explanation: Subarray with maximum sum is [5, 1, 3].

    Example 2:
    Input: [2, 3, 4, 1, 5], k=2 
    Output: 7
    Explanation: Subarray with maximum sum is [3, 4].
*/
const max_sub_array_of_size_k = function(k, arr){
    var result = 0;
    var windowMax = 0;
    var windowStart = 0;

    for(var windowEnd = 0; windowEnd < arr.length; windowEnd++){
        
        // add current elem to maxsum
        windowMax += arr[windowEnd];
        if(windowEnd >= k - 1){
            result = Math.max(result, windowMax);
            // slide window by removing first elem and incrementing windowStart
            windowMax -= arr[windowStart];
            windowStart++;
        }
    }

    return result;
}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));

// node Maximum-Sum-Subarray-of-Size-K-\(easy\).js