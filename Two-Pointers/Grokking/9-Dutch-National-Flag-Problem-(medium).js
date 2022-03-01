/*  Given an array containing 0s, 1s and 2s, sort the array in-place. 
    You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

    The flag of the Netherlands consists of three colors: red, white and blue; 
    and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

    Example 1:
    Input: [1, 0, 2, 1, 0]
    Output: [0 0 1 1 2]

    Example 2:
    Input: [2, 2, 0, 1, 2, 0]
    Output: [0 0 1 2 2 2 ]

*/

const dutch_flag_sort = function(arr){
    /*  We can use a Two Pointers approach while iterating through the array. 
        Let’s say the two pointers are called low and high which are pointing to the first and the last element of the array respectively. 
        So while iterating, we will move all 0s before low and all 2s after high so that in the end, all 1s will be between low and high.
    */
    let low = 0;
    let high = arr.length-1;
    // need 3rd pointer for swaps
    let mid = 0;

    // process is finished when mid passes high
    while(mid <= high){
        // if current num is 0, swap with wherever low is
        if(arr[mid] === 0){
            let temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            // increment mid and low after the swap or else it'll act on the same elems in next iteration
            mid++;
            low++;
        }
        // num is 1, but we don't care about 1s so increment mid and move on
        else if(arr[mid] === 1){
            mid++;
        }
        // the num is 2, so swap with high
        else{
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            // decrement high because high now has 1 more number, so enlarge the window size of high
            high--;
            // mid is not incremented since it could be 0, 1, or 2 -- unlike the low case where it doesn't matter
        }
    }

    return arr;
}

let arr = [1, 0, 2, 1, 0]
console.log(dutch_flag_sort(arr))

// https://www.youtube.com/watch?v=yj_14t67Bh0