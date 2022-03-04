/*  A string is good if there are no repeated characters.

    Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​. 
*/

var countGoodSubstrings = function(s) {

    // cheeky af..
    let count = 0;

    for(let end = 0; end<s.length - 2; ++end){
        
        let sub = s.substring(end, end + 3)
        let set = new Set(sub);

        if(set.size == 3) count++;

    }
    return count;
};

console.log(countGoodSubstrings("aababcabc"))
// Output: 4
// The good substrings are "abc", "bca", "cab", and "abc".
console.log(countGoodSubstrings("xyzzaz"))
// Output: 1
// The only good substring of length 3 is "xyz".

// node 1876-Substrings-of-Size-Three-with-Distinct-Characters.js