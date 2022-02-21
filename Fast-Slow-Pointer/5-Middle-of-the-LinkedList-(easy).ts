/*  Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
    If the total number of nodes in the LinkedList is even, return the second middle node.

    Example 1:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
    Output: 3

    Example 2:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
    Output: 4

    Example 3:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
    Output: 4
*/
import intNode from '../intNode';

// BRUTE FORCE: Get length in 1 iteration, then go to middle of length in 2nd iteration
// const find_middle_of_linked_list = function(head: intNode): intNode{
//     let front = head;
//     let length = 1;
//     // get length off LL
//     while(front.next != null){
//         front = front.next;
//         length++;
//     }

//     // loop to middle of LL using length
//     // Odd numbers: 5/2 = 2.5, but Math.ceil(5/2) = 3
//     // Even numbers: 6/2 = 3, but Math.ceil(7/2) = 4
//     let middle = head;
//     let counter = 1;
//     // if length is even, add 1 so that it returns the 2nd middle node
//     if(length % 2 == 0) length ++;
//     while(counter < Math.ceil(length/2)){
//         middle = middle.next;
//         counter++;
//     }
//     return middle;
// }

// Fast-slow method: only 1 iteration needed
const find_middle_of_linked_list = function(head: intNode): intNode{
    // since fast pointer moves 2x faster, it reaches the end while slow pointer reached middle
    let slow = head;
    let fast = head;

    // when fast is null, it reached the end of the list
    // also check that fast.next != null, since we're calling fast.next.NEXT in the loop
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

var head: intNode = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)
console.log("\nTime complexity: O(n) to loop through the list \nSpace complexity: O(1) since it runs in constant space");
console.log(`Middle Node: ${find_middle_of_linked_list(head).value} -- SHOULD BE 3`)


head.next.next.next.next.next = new intNode(6)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value} -- SHOULD BE 4`)


head.next.next.next.next.next.next = new intNode(7)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value} -- SHOULD BE 4`)

// ts-node 5-Middle-of-the-LinkedList-\(easy\).ts