/*  Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

    Example 1:
    Appointments: [[1,4], [2,5], [7,9]]
    Output: false
    Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

    Example 2:
    Appointments: [[6,7], [2,4], [8,12]]
    Output: true
    Explanation: None of the appointments overlap, therefore a person can attend all of them.

    Example 3:
    Appointments: [[4,5], [2,3], [3,6]]
    Output: false
    Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
*/

let can_attend_all = function(arr){

    // sort array based on start time -- DONE
    // loop through array of intervals
    // if any of them overlap, return false

    arr = arr.sort((a,b) => a[0] - b[0]);
    console.log(arr);

    // if we compare every elem to every other elem, thats O(n^2) -- but its sorted so we don't have to
    // All in 1 pass: compare each elem with its previous elem

    for(let i=1; i<arr.length; i++){

        if(arr[i][0] < arr[i-1][1]){

            // if the previous meeting's end value is greater than the current meeting's start -- that overlaps
            // Note: even if the previous end is equal to the current start, it means the person can still attend , so no overlap
            return false;
        }

    }


    return true;
}

let arr1 = [[1,4], [2,5], [7,9]]
let arr2 = [[6,7], [2,4], [8,12]]

// console.log(`Arr1:`, arr1);
// console.log(`Arr2:`, arr2);

console.log(`Can Attend?: `, can_attend_all(arr1));
console.log(`Can Attend?: `, can_attend_all(arr2));
