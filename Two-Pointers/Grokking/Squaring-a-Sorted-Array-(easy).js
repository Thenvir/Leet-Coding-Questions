/*  Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

    Example 1:
    Input: [-2, -1, 0, 2, 3]
    Output: [0, 1, 4, 4, 9]

    Example 2:
    Input: [-3, -1, 0, 1, 2]
    Output: [0 1 1 4 9]
*/

const make_squares = function(arr) {
    const squares = [];

    // input array is SORTED.. so the elems at the start and end will have biggest squares
    // 2 pointers each start at the start and end of array, while another pointer at results array fills from largest to smallest
    var start = 0;
    var end = arr.length -1;
    var resultPointer = arr.length -1;

    while(resultPointer >= 0){
        if(Math.pow(arr[start], 2) >= Math.pow(arr[end], 2)){
            squares[resultPointer] = Math.pow(arr[start], 2);
            start++;
        } else {
            squares[resultPointer] = Math.pow(arr[end], 2);
            end--;
        }
        resultPointer --;
    }
    return squares;
}

console.log("\nTwo Pointer approach - Time: O(n) since N elems in array - Space: O(N) since it creates a new array of size N");
console.log(make_squares([-2, -1, 0, 2, 3]));
console.log(make_squares([-3, -1, 0, 1, 2]));

// node Squaring-a-Sorted-Array-\(easy\).js 