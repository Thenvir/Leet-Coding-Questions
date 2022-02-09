/*  Given an array of characters where each character represents a fruit tree, 
    you are given two baskets and your goal is to put maximum number of fruits in each basket. 
    The only restriction is that each basket can have only one type of fruit.

    You can start with any tree, but once you have started you can’t skip a tree. 
    You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

    Write a function to return the maximum number of fruits in both the baskets.

    Example 1:
    Input: Fruit=['A', 'B', 'C', 'A', 'C']
    Output: 3
    Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

    Example 2:
    Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
    Output: 5
    Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
    This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

const fruits_into_baskets = function(fruits){
    // use map and shrinking window to 
    var maxFruits = 0;
    var windowStart = 0;
    var map = new Map();

    for(var windowEnd = 0; windowEnd < fruits.length; windowEnd++){
        const currFruit = fruits[windowEnd];

        // add to map and increase frequency accordingly
        if(!map.has(currFruit)){
            map.set(currFruit, 1);
        } else {
            map.set(currFruit, map.get(currFruit) + 1);
        }

        // shrink window if # of distinct fruits > 2
        while(map.size > 2){
            var startFruit = fruits[windowStart];
            map.set(startFruit, map.get(startFruit) - 1);

            // delete from map if frequency is 0
            if(map.get(startFruit) == 0){
                map.delete(startFruit);
            }
            // slide window up (looping mechanic for while loop)
            windowStart++;
        }

        // keep track of current max fruits
        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    }
    return maxFruits;
}

console.log( fruits_into_baskets(['A', 'B', 'C', 'A', 'C']) );
console.log( fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']) );


// node Fruits-into-Baskets-\(medium\).js