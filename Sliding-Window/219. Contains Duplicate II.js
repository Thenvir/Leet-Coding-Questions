/* 
    Given an integer array nums and an integer k, 
    return true if there are two distinct indices i and j in the array 
    such that nums[i] == nums[j] and abs(i - j) <= k. 
 
    Input: nums = [1,2,3,1], k = 3
    Output: true

    Input: nums = [1,0,1,1], k = 1
    Output: true

    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false
 */

var containsNearbyDuplicate = function(nums, k) {
    // unique key-value store
    var map = new Map();
    for(var i=0; i<nums.length; i++){
        // if current elem is already in map and satisfies window length of k, return true
        if((i - map.get(nums[i])) <= k){
            // console.log("MAP BEFORE RETURNING TRUE: ", map)
            return true;
        }
        // else add element to map, with its index as value
        // if elem already in map, updates the value (index) to latest index (allows sliding window)
        map.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// node 219.\ Contains\ Duplicate\ II.js 