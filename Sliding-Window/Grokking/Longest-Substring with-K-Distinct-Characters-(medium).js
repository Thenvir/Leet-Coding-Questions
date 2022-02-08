/*  Given a string, find the length of the longest substring in it with no more than K distinct characters.

    Example 1:
    Input: String="araaci", K=2
    Output: 4
    Explanation: The longest substring with no more than '2' distinct characters is "araa".

    Example 2:
    Input: String="araaci", K=1
    Output: 2
    Explanation: The longest substring with no more than '1' distinct characters is "aa".

    Example 3:
    Input: String="cbbebi", K=3
    Output: 5
    Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

const longest_substring_with_k_distinct = function(str, k){
    var windowStart = 0;
    var longestSubtring = 0; // return value
    var map = new Map(); // keep track of distinct chars with hashmap (letter-frequency pairs)

    for(var windowEnd=0; windowEnd < str.length; windowEnd++){

        var currChar = str.charAt(windowEnd);
        // add current char to map with frequency of 1 or increment frequency
        if(!map.has(currChar)){
            map.set(currChar, 1);
        } else{
            map.set(currChar, map.get(currChar) + 1);
        }

        // if more than k distinct chars, shrink window until less than k
        while(map.size > k){
            // take char at the start of the window and lower frequency by 1 since window will slide past it
            map.set(str.charAt(windowStart), map.get(currChar) - 1);
            // if its frequency is 0, it means no cases of this char within this window, so delete from map
            if(map.get(str.charAt(windowStart)) == 0){
                map.delete(str.charAt(windowStart));
            }
            // slide the window up (remember, since its the looper for while loop)
            windowStart++;
        }
        // keep track of the newest longest substring
        longestSubtring = Math.max(longestSubtring, windowEnd - windowStart + 1);
    }
    return longestSubtring;

}

console.log(longest_substring_with_k_distinct("araaci", 2));
console.log(longest_substring_with_k_distinct("araaci", 1));
console.log(longest_substring_with_k_distinct("cbbebi", 3));


// node Longest-Substring with-K-Distinct-Characters-(medium).js