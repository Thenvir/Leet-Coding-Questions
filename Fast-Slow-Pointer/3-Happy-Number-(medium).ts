/*  Any number will be called a happy number if, 
    after repeatedly replacing it with a number equal to the sum of the square of all of its digits, 
    leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. 
    Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

    Example 1:
    Input: 23   
    Output: true (23 is a happy number)  
    Explanations: Here are the steps to find out that 23 is a happy number:
    2^2 + 3 ^2 = 13
    1^2 + 3^2= 10
    1^2 + 0^2= 1

    Example 2:
    Input: 12   
    Output: false (12 is not a happy number)  
    Explanations: Here are the steps to find out that 12 is not a happy number:
    5 -> 25 -> 29 -> 85 -> 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89
    Step ‘13’ leads us back to step ‘5’ as the number becomes equal to ‘89’, 
    this means that we can never reach ‘1’, therefore, ‘12’ is not a happy number.
*/

const find_square_sum = function(num : number): number {
    let sum = 0;

    // function handles single numbers, which divide down to 0 so stop when num = 0
    while(num > 0){
        // extract digit with modulo, add it to sum
        let digit = num % 10;
        sum += digit * digit;
        // if a sum of 1 is reached, its a happy cycle so break
        if(sum == 1) break;
        // need to use Math.floor to remove decimals
        num = Math.floor(num / 10);
    }
    return sum;
}

const find_happy_number = function(num: number): boolean {
    
    // using slow & fast pointer, the WILL eventually meet because for each number, there exists a cycle
    // since happy number cycles at # 1, while rest cycle at another number
    let slow = num;
    let fast = num;

    // need loop to go indefinitely until cycle found
    while(true){
        slow = find_square_sum(slow);
        // move 2 steps each time
        fast = find_square_sum(find_square_sum(fast));

        // when they eventually meet, escape the infinite loop
        if(slow == fast) break;
    }
    // if slow is cycling at 1, it'll return true (happy number)
    // else its cycling on another number, so not happy number
    return slow == 1;
}

console.log("\nTime complexity: Difficult to determine, needs a fancy math proof to get O(logN) \nSpace complexity: O(1) since it runs in constant space");
console.log(`${find_happy_number(23)} -- SHOULD BE TRUE`);
console.log(`${find_happy_number(12)} -- SHOULD BE FALSE`);

// ts-node 3-Happy-Number-\(medium\).ts