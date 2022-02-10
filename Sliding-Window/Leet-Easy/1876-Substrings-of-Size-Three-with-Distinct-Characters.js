var countGoodSubstrings = function(s) {
    var numGoodStrings = 0;
    
    // loop through string with sliding window
    for(var windowEnd = 0; windowEnd < s.length - 2; windowEnd++){
        // each sliding window is 3 chars long
        var substring = s.substring(windowEnd, windowEnd +3);
        var set = new Set(substring);

        if(set.size == 3){
            numGoodStrings ++;
        }
    }
    return numGoodStrings;
};

console.log(countGoodSubstrings("aababcabc"))
console.log(countGoodSubstrings("xyzzaz"))

// node 1876-Substrings-of-Size-Three-with-Distinct-Characters.js