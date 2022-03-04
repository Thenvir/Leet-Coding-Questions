/*  Given a string S of length N, the task is to find the lexicographically smallest K-length subsequence from the string S 
    (where K < N). 

    Examples:
    Input: S = “bbcaab”, K = 3
    Output: “aab”

    Input: S = “aabdaabc”, K = 3
    Output: “aaa” 
*/

let lex_smallest_k = function(s, k){

    // sliding window
    // while keeping track of smallest string
    let smallest = ''

    let start = 0;

    for(let end=0; end<s.length; ++end){

        let currChar = s.charAt(end);
        smallest += currChar;

        // if window size > k
        if((end - start + 1) > k){
            smallest = smallest.substring(1);
            start++;
        }
        let localSmall = s.substring(start, end + 1);
        // console.log(`${localSmall}`);
        if(localSmall < smallest){
            smallest = localSmall;
            console.log(`Smallest now: ${smallest}`);
        }
    }

    return smallest;
}

let s1 = "bbcaab";
let s2 = "aabdaabc";
console.log(`Smallest for ${s1}: `, lex_smallest_k(s1, 3))
console.log(`\nSmallest for ${s2}: `, lex_smallest_k(s2, 3))