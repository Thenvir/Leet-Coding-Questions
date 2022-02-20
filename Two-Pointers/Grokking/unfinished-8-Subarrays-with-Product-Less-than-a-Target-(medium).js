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

const find_subarrays = function(arr, target){
    let ans = [];
    let localProduct = 1;
    let localArrs = [];

    for(let i =0; i<arr.length; i++){
        if(arr[i] < target){
            ans.push([arr[i]]);
        }
        if(localProduct*arr[i] < target){
            localProduct *= arr[i];
            localArrs.push(arr[i]);
        }
        else{
            // need to empty localProduct && localArrs
            localProduct = localProduct / arr[i];
            ans.push(localArrs);
            localArrs = [arr[i]];
            // AND.. need a window slide
        }
    }
    return ans;
}

console.log("\nTime:  \nSpace: ");
console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));

// node Subarrays-with-Product-Less-than-a-Target-\(medium\).js