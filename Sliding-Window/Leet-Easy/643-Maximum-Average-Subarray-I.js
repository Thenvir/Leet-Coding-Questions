/* 
    You are given an integer array nums consisting of n elements, and an integer k.

    Find a contiguous subarray whose length is equal to k that has the maximum average value 
    and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 
    Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000

    Example 2:
    Input: nums = [5], k = 1
    Output: 5.00000
 */

    var findMaxAverage = function(nums, k) {

        // To find the max average, find the max within the window

        let max = Number.NEGATIVE_INFINITY
        let windowStart = 0
        let windowSum = 0
        
        for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            // running sum of elements within window
            windowSum += nums[windowEnd]
            
            //slide the window if the end is greater than k 
            // k-1 since it window starts at 0 index
            if (windowEnd >= k - 1) {
                //calculate if new sum or previous sum is bigger
                max = Math.max(max, windowSum)
                //subtract the element going out (start of the window)
                windowSum -= nums[windowStart]
                //slide window ahead
                windowStart += 1
            }
        }
        //return the average
        return max / k
    };
    
    console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
    console.log(findMaxAverage([5], 1));
    
    // node 643-Maximum-Average-Subarray-I.js