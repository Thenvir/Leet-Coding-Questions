/*  Given an array arr of unsorted numbers and a target sum, 
    count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
    Write a function to return the count of such triplets.

    Example 1:
    Input: [-1, 0, 2, 3], target=3 
    Output: 2
    Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
    
    Example 2:
    Input: [-1, 4, 2, 1, 3], target=5 
    Output: 4
    Explanation: There are four triplets whose sum is less than the target: 
    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

const triplet_with_smaller_sum = function(arr, target){
    // sort array first  since unsorted given
    arr = arr.sort((a,b) => a-b);
    var count = 0;

    // loop ends at length -2, since by the 3rd to last digit, the loop is done 
    for(var i= 0; i<arr.length -2; i++){
        var left = i+1;
        var right = arr.length -1;
        while(left < right){
            if(arr[i] + arr[left] + arr[right] < target){
                // WE DONT do "right--" and "count++" 
                // because if arr[i] + arr[left] + arr[right] < target, 
                // then arr[i] + arr[left] + ALL elements before right will be < target (since array sorted)
                // so only increment the count by # of elements between left and right
                count += (right - left); 
                left++;
            }
            else{
                right --;
            }
        }
    }
    return count;
}

console.log("\nTime complexity: O(n^2) since in the worst case, the nested loops can run till the end of the array - Space complexity: O(n), which is required for array sorting");
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));