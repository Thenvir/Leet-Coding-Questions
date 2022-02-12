/*  Given an array of unsorted numbers and a target number, 
    find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. 
    If there are more than one such triplet, return the sum of the triplet with the smallest sum.

    Example 1:
    Input: [-2, 0, 1, 2], target=2
    Output: 1
    Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
    
    Example 2:
    Input: [-3, -1, 1, 2], target=1
    Output: 0
    Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
   
    Example 3:
    Input: [1, 0, 1, 1], target=100
    Output: 3
    Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

const triplet_sum_close_to_target = function(arr, target_sum){
    // must sort since unsorted given
    arr.sort((a,b)=>a-b);
    // need smallest value, so set to infinity initially
    let closest = Infinity;

    // till length - 2 since 2 vars ahead of i (both left, right)
    for (let i=0;i<arr.length-2;i++) {
        let left = i+1; 
        let right = arr.length-1;
        // standard condition
        while (left < right) {
            // get current triplet sum
            let localSum = arr[i] + arr[left] + arr[right];

            // if the localsum is closer to the target than the current closest sum,
            // set the closest sum to localsum
            if (Math.abs(localSum - target_sum) < Math.abs(closest - target_sum)){
                closest = localSum;
            }
            // if the current sum is more than the target, decrem right pointer to make next localsums smaller (standard)
            if (localSum > target_sum){
                right--;
            } 
            else {
                left++;
            }
        }
    }
    return closest;
}

console.log("\nTime complexity: O(n^2) - Space complexity: O(n), which is required for array sorting");
console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

// node Triplet-Sum-Close-to-Target-\(medium\).js