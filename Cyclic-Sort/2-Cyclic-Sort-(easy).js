/*  We are given an array containing ‘n’ objects. 
    Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
    This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

    Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space. 
    For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

    Example 1:
    Input: [3, 1, 5, 4, 2]
    Output: [1, 2, 3, 4, 5]

    Example 2:
    Input: [2, 6, 4, 3, 1, 5]
    Output: [1, 2, 3, 4, 5, 6]

    Example 3:
    Input: [1, 5, 6, 4, 3, 2]
    Output: [1, 2, 3, 4, 5, 6]
*/

let cyclic_sort = function(arr) {

    // loop through array
    // if element at index i is not equal to i, (ex: 5 at index 1)
    // start a process of swapping tll index i has i (swap 5 with whats at index 5, repeat until i = i)
    let i =0;

    while(i<arr.length){

        // do -1 since the array values isn't 0-index
        let currValue = arr[i] - 1;

        // if current elem isn't equal to it's current value (1 != 1), swap till it is
        if(arr[i] != arr[currValue]){
            // temp = 5 (at arr[1])
            let temp = arr[i];
            // arr[1] = arr[5]
            arr[i] = arr[currValue];
            // arr[5] = 5
            arr[currValue] = temp; 
        }
        // only increment up when the proper element is in its place
        else{
            i++;
        }
    }
    return arr;
}


let arr1 = [3, 1, 5, 4, 2];
let arr2 = [2, 6, 4, 3, 1, 5];
let arr3 = [1, 5, 6, 4, 3, 2];

console.log('Before: ', arr1);
console.log('After: ', cyclic_sort(arr1));

console.log('\nBefore: ', arr2);
console.log('After: ', cyclic_sort(arr2));

console.log('\nBefore: ', arr3);
console.log('After: ', cyclic_sort(arr3));