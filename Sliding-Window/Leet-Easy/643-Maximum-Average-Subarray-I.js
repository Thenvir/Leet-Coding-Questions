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

        let max = Number.NEGATIVE_INFINITY;
        
        let start = 0;
        let sum = 0;

        for(let end=0; end<nums.length; ++end){

            let currNum = nums[end];

            if((end - start + 1) > k){
                sum -= nums[start];
                start++;
            }
            sum += currNum;
            max = Math.max(max, (sum/k));
        }
        return max;
    };
    
    console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
    console.log(findMaxAverage([5], 1));
    
    // node 643-Maximum-Average-Subarray-I.js