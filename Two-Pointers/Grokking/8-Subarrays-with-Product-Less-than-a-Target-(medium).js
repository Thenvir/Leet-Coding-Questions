/*  Given an array with positive numbers and a target number, 
    find all of its contiguous subarrays whose product is less than the target number.

    Example 1:
    Input: [2, 5, 3, 10], target=30 
    Output: [2], [5], [2, 5], [3], [5, 3], [10]
    Explanation: There are six contiguous subarrays whose product is less than the target.

    Example 2:
    Input: [8, 2, 6, 5], target=50 
    Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
    Explanation: There are seven contiguous subarrays whose product is less than the target.
*/
// import Deque from '../../Deque';

const find_subarrays = function(arr, target){
    let result = [];

    let product = 1;
    let left = 0;

    // loop through arr
    for(let right = 0; right<arr.length; right++){
        // get running product
        product *= arr[right];

        // until the product is smaller than the target, move window up (left increments)
        while(product >= target && left < arr.length){
            product = product / arr[left];
            left++;
        }

        // here, the product is < target
        // since the product of all numbers left to right is less than the target,
        // all subarrays from left to right will have a product less than the target too (just like triplets with smaller sum problem)
        // to avoid duplicates, we start with a subarray only containing the largest val (arr[right]) and extend its
        const tempList = [];
        // this loop will first push [ arr[right] ], then [ arr[right], arr[right-1] ], until [.... arr[left] ]
        for(let i = right; i >= left; i--){
            // add elements to front of array
            tempList.unshift(arr[i]);
            // then push
            result.push([arr[i]]);
            result.push(tempList);
        }
    }
    // answer has duplicates
    return result;
}

// console.log("\nTime:  \nSpace: ");
console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));

// node Subarrays-with-Product-Less-than-a-Target-\(medium\).js