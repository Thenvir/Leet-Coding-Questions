/*  Given a list of non-overlapping intervals sorted by their start time, 
    insert a given interval at the correct position and merge all necessary intervals 
    to produce a list that has only mutually exclusive intervals.

    Example 1:
    Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
    Output: [[1,3], [4,7], [8,12]]
    Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
   
    Example 2:
    Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
    Output: [[1,3], [4,12]]
    Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
    
    Example 3:
    Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
    Output: [[1,4], [5,7]]
    Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
*/
import Interval from '../Interval';

const insert = function(intervals: Interval[], newInterval: Interval): Interval[] {
    
    let output = [];
    for(let i = 0; i< intervals.length; i++){
        // if new is before the rest of the list --> append new before the list, then the list, and return output
        // new is exclusive from the rest of the list
        if(newInterval.end < intervals[i].start){
            output.push(newInterval);

            // add rest of the list to the output
            for(let j = i; j<intervals.length; j++){
                output.push(intervals[j]);
            }
            return output;
        }
        // if new is after the current interval --> current interval comes before new, so insert it. 
        // can't insert new yet cuz we don't know if it overlaps yet
        // current interval is exclusive from the rest of the list
        else if(newInterval.start > intervals[i].end){
            output.push(intervals[i]);
        }
        // if new is overlapping --> merge
        else {
            let start = Math.min(newInterval.start, intervals[i].start);
            let end = Math.max(newInterval.end, intervals[i].end);
            newInterval = new Interval(start, end)
            // DONT PUSH TO OUTPUT ARRAY HERE... we don't know if it needs to be merged with the next interval
            // for now, all we do is set new equal to the merged array
            // in the next iterations, itll fall into case 1 or case 2 -- or itll be huge interval that we append at the end 
        }
    }
    // if new is after the rest of the list --> append new to the end of the list, and return it
    output.push(newInterval);
    return output;
}

console.log('Intervals after inserting the new interval: ---- SHOULD BE [1,3], [4,7], [8,12]');
var intervals = [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)]
var result: Interval[] = insert(intervals, new Interval(4, 6));
console.log(`${result.map(x => x.get_interval())}`);

console.log('Intervals after inserting the new interval: ---- SHOULD BE [1,3], [4,12]');
result = insert([  
    new Interval(1, 3),  
    new Interval(5, 7),  
    new Interval(8, 12)], 
    new Interval(4, 10));
console.log(`${result.map(x => x.get_interval())}`);

console.log('Intervals after inserting the new interval: ---- SHOULD BE [1,4], [5,7]');
result = insert([new Interval(2, 3),  new Interval(5, 7),], new Interval(1, 4));
console.log(`${result.map(x => x.get_interval())}`);

// ts-node 3-Insert-Interval-\(medium\).ts