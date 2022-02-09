/*  Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

    Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

    Example 1:
    Input: [1, 2, 3, 4, 6], target=6
    Output: [1, 3]
    Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

    Example 2:
    Input: [2, 5, 9, 11], target=11
    Output: [0, 2]
    Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

const pair_with_targetsum = function(arr, target_sum){
    // both pointers 
    var start = 0;
    var end = arr.length-1;

    // start loop, with start < end conditional (stops loop when they cross over each other, whenever that is)
    while(start < end){
        if(arr[start] + arr[end] == target_sum){
            return [start, end];
        }
        else if(arr[start] + arr[end] > target_sum){
            // sum too high, so move end pointer to lower number
            end--;
        }
        else {
            start++;
        }
    }
    return [];
}

const pair_with_targetsum_hashMap = function(arr, target_sum){
    var map = new Map();

    for(var i = 0; i<arr.length; i++){
        var currNum = arr[i];
        if(map.has(target_sum - currNum)){
            return [map.get(target_sum - currNum), i];
        }
        map.set(currNum, i);
    }
    return []
}

console.log("\nTwo Pointer approach - Time: O(n) since N elems in array - Space: O(1) since it runs in constant space");
console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum([2, 5, 9, 11], 11));
console.log("\nHashTable/HashMap approach: - Time: O(n) since N elems in array - Space: O(N) since it could push all N elems to hashmap");
console.log(pair_with_targetsum_hashMap([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum_hashMap([2, 5, 9, 11], 11));

// node Pair-with-Target-Sum-\(easy\).js