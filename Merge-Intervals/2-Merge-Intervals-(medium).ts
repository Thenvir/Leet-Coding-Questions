/*  Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

    Example 1:
    Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
    one [1,5].

    Example 2:
    Intervals: [[6,7], [2,4], [5,9]]
    Output: [[2,4], [5,9]]
    Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
    
    Example 3:
    Intervals: [[1,4], [2,6], [3,5]]
    Output: [[1,6]]
    Explanation: Since all the given intervals overlap, we merged them into one.
*/
import Interval from '../Interval';

const merge = function(intervals: Interval[]): Interval[] {

    // sort all interval elements by their start value
    // same sorting as array, but sort on START value of each element only
    intervals = intervals.sort((a, b) => a.start - b.start);

    // start with the first interval in the output array
    let output: Interval[] = [intervals[0]];

    // start at interval 1, since interval 0 already in output array
    for(let i = 1; i <intervals.length; i++){
        // check current interval with the latest value in output array
        if(intervals[i].start <= output[output.length-1].end){
            // new merged interval takes the later end date
            let newEnd = Math.max(intervals[i].end, output[output.length-1].end)
            // but you're not pushing a new value -- you only do that when there's no overlap
            // instead, you're editing the end value of the last interval in the output array
            output[output.length-1].end = newEnd;
        }
        else output.push(intervals[i])
    }
    return output;
}

let merged_intervals: Interval[] = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
let result: string = "";
for(var i=0; i < merged_intervals.length; i++) {  
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)  

merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {  
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)  

merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {  
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)

// ts-node 2-Merge-Intervals-\(medium\).ts