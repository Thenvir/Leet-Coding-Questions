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
    // 2 pointers
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

    // Array left-shift approach (given answer)
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
}

// Easy answer with sets (kinda defeats the purpose of 2 pointers though)
const remove_duplicates_set = function(arr) {
    // 2 pointers at both ends, loop until they meet in middle
    var set = new Set(arr);
    return set.size;
}

console.log("\nTwo Pointer approach - Time: O(n) since N elems in array - Space: O(1) since it runs in constant space");
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

// node Remove-Duplicates-\(easy\).js 