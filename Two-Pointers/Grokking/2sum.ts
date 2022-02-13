/*  Given an array of unsorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

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

function twoSum(arr: Array<number>, target: number): Array<number> {
    var start = 0;
    var end = arr.length -1;

    arr = arr.sort((a,b) => (a-b));

    while(start < end){
        var currSum = arr[start] + arr[end];
        if(currSum == target){
            return [start, end];
        }
        else if(currSum > target){
            // sum too high, so move end pointer to lower number
            end--;
        }
        else {
            start++;
        }
    }
    return [];
}

console.log(twoSum([1, 2, 3, 4, 6], 6));