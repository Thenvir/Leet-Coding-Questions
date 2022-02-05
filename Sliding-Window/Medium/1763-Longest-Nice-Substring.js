/* 
    A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. 
    For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. 
    However, "abA" is not because 'b' appears, but 'B' does not.

    Given a string s, return the longest substring of s that is nice. 
    If there are multiple, return the substring of the earliest occurrence. 
    If there are none, return an empty string.
 
    Example 1:
    Input: s = "YazaAay"
    Output: "aAa"
    Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
    "aAa" is the longest nice substring.

    Example 2:
    Input: s = "Bb"
    Output: "Bb"
    Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.

    Example 3:
    Input: s = "c"
    Output: ""
    Explanation: There are no nice substrings.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    // 1 char strings automatically fail
    if (s.length<2) return "";

    // Stores each unique char of the string (upper and lower versions are unique)
    const set = new Set(s);

    for (let i=0; i<=s.length; i++){
        if (s[i]){
            // check if upper and lower exist in string
            if (set.has(s[i].toUpperCase()) && set.has(s[i].toLowerCase())) continue;

            // split string in half when single char found (no upper/lower pair)
            let s1 = longestNiceSubstring(s.substring(0, i));
            let s2 = longestNiceSubstring(s.substring(i+1));

            // return longer string at end of recursion
            return s1.length>=s2.length? s1 : s2
        }
    }
    return s;
};
    
    console.log(longestNiceSubstring("YazaAay"));
    console.log(longestNiceSubstring("Bb"));
    console.log(longestNiceSubstring("c"));
    
    // node 1763-Longest-Nice-Substring.js