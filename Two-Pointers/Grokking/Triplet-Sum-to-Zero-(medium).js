/*  Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

    Example 1:
    Input: [-3, 0, 1, 2, -1, 1, -2]
    Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
    Explanation: There are four unique triplets whose sum is equal to zero.

    Example 2:
    Input: [-5, 2, -1, -2, 3]
    Output: [[-5, 2, 3], [-2, -1, 3]]
    Explanation: There are two unique triplets whose sum is equal to zero.
*/

const search_triplets = function(arr){
    // given unsorted, so sort it for easy duplicate skips (js needs comparison function)
    arr = arr.sort((a,b) => a-b);
    triplets = [];

    // for every element 'x', find a pair (y,z) such that y + z = -x
    for(var i=0; i< arr.length; i++){
        // skip duplicate elems (which will be adjacent since arr is sorted now)
        // must check that its not the first elem though, since i-1 would be arr[-1]
        if(i > 0 && arr[i] == arr[i-1]){
            continue;
        }
        // call helper func to find the pair (y,z) and return a unique triplet with (x, y, z)
        // need to pass the original array, the target for the pair to add up to (-x aka -arr[i]),
        // the adjacent element to i which is i+1 (aka y)
        // the triplets array to add any unique triplets to
        search_pair_helper(arr, -arr[i], i+1, triplets)
    }
    return triplets;
}

const search_pair_helper = function(arr, negX, y, triplets){
    // need this 2nd end-pointer (like usual 2-sum approach)
    var end = arr.length -1;

    // usual 2-sum looping conditional
    while(y < end){
        var currSum = arr[y] + arr[end];
        if(currSum == negX){
            // if triplet found, push all 3 values
            triplets.push([-negX, arr[y], arr[end]]);
            // must increment/decrement both pointers now
            y++;
            end--;
            // IMPORTANT PART: skip over duplicates since both pointers moved -- just like in the main loop with arr[i] == arr[i-1]
            // don't know how many dups so need while loop till past the dups
            // and have to re-check to (y < end) conditional again, since both pointers moved after finding valid triplet
            while(y < end && arr[y] == arr[y-1]){
                y++;
            }
            while(y < end && arr[end] == arr[end+1]){
                end--;
            }
        }
        // now the other 2 conditionals from the standard 2-sum algo with increm/decrem
        else if(currSum > negX){
            end--;
        }
        else{
            y++;
        }
    }
}

console.log("\nTime: O(n^2) since search_pair is being called on every element of the array \nSpace: O(n) since the entire array needed to be sorted");
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

// node Triplet-Sum-to-Zero-\(medium\).js