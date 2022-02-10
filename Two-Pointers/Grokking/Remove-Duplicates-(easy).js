/*  Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
    after removing the duplicates in-place return the new length of the array.

    Example 1:
    Input: [2, 3, 3, 3, 6, 9, 9]
    Output: 4
    Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

    Example 2:
    Input: [2, 2, 2, 11]
    Output: 2
    Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

const remove_duplicates = function(arr) {

    // Array left-shift approach
    // Its removing in place since after the shift and new array length returned,
    // its like the rest of the array past the length doesn't count
    var end = 1;
    var nonDups = 1;
    while(end < arr.length){
        if(arr[nonDups-1] != arr[end]){
            // if not equal, make next array elem equal to the new nonduplicated value
            arr[nonDups] = arr[end]
            nonDups++;
        } 
        end++
    }
    return nonDups;


    // Initial approach which gets the correct size output, but its not "removing in place"
    // var start = 0;
    // var end = start + 1;
    // var nonDups = 1;

    // while(end < arr.length){
    //     if(arr[start] != arr[end]){
    //         start = end;
    //         end++;
    //         nonDups++;
    //     } else{
    //         end++
    //     }
    // }
}

// Easy way to get non-dup size with sets (but there's no "removing in place")
const remove_duplicates_set = function(arr) {
    // 2 pointers at both ends, loop until they meet in middle
    var set = new Set(arr);
    return set.size;
}

console.log("\nTwo Pointer approach - Time: O(n) since N elems in array - Space: O(1) since it runs in constant space");
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

// node Remove-Duplicates-\(easy\).js 