/*  Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

    Example 1:
    Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
    Output: [2, 3], [5, 6], [7, 7]
    Explanation: The output list contains the common intervals between the two lists.
    
    Example 2:
    Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
    Output: [5, 7], [9, 10]
    Explanation: The output list contains the common intervals between the two lists.
*/

// import Interval from '../Interval'
// just use arrays as intervals instead of the class since explanation is using arrays

let merge = function(arr1, arr2) {

    // loop through both arrays using 2 pointers (allows us to do only 1 pass)
    // if intervals intersect (START time falls BETWEEN other interval's start & end time), merge
    // but we only want the intersections (not total range), so the merged interval will be: 
    // start = max(start1, start2) and end = min(end1, end2)

    let result = [];

    // use 2 pointers to do only 1 pass through both, and avoid checking for which array is shorter
    let i = 0;
    let j =0;

    while(i < arr1.length && j < arr2.length){

        // check which overlaps the other with booleans
        // (if an interval's START time lies between the other's start and end time): [2,3] overlaps [1, 3]
        let aOverB = arr1[i][0] >= arr2[j][0] && arr1[i][0] <= arr2[j][1]
        let bOverA = arr2[j][0] >= arr1[i][0] && arr2[j][0] <= arr1[i][1]

        // merge if any overlap exists, and push to result
        if(aOverB || bOverA){
            let intersectionStart = Math.max(arr1[i][0], arr2[j][0]);
            let intersectionEnd = Math.min(arr1[i][1], arr2[j][1]);
            let intersection = [intersectionStart, intersectionEnd];
            result.push(intersection);
        }
        // need to increment now for the while loop
        // whichever interval finished first, move it (logically makes sense for comparing sorted times)
        if(arr1[i][1] <= arr2[j][1]){
            ++i;
        }
        else {
            ++j;
        } 
    }
    return result;

}

let arr1 = [[1,3], [5,6], [7,9]]
let arr2 = [[2,3], [5,7]]

console.log(`Arr1:`, arr1);
console.log(`Arr2:`, arr2);

console.log(`Intersections:`, merge(arr1, arr2));
