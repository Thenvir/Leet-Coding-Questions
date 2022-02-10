/*  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    

    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

var twoSum = function(nums, target) {
    // use map approach since array isn't sorted and wants index from the unsorted array
    // and easy to map value to index (and O(1) search with keys)
    var map = new Map();

    for(var i=0; i<nums.length; i++){ 
        // if map has the missing addend, return
        if(map.has(target - nums[i])){
            // IMPORTANT: second value is jut i since its already the index needed
            return [map.get(target - nums[i]), i];
        }
        // else add to map and keep going
        map.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));