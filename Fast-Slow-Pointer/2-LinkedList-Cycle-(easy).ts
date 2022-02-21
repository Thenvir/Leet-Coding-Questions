/*  Given the head of a Singly LinkedList, 
    write a function to determine if the LinkedList has a cycle in it or not.
*/
import intNode from '../intNode';

const has_cycle = function(head: intNode) { 
    let slowHead: intNode = head;
    let fastHead: intNode = head;

    // must check fastHead.next for null, since otherwise you can't do the .next.next jump on a null
    while(fastHead != null && fastHead.next != null){
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
        if(slowHead == fastHead) return true;
    }
    return false;
}  

var head = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)
head.next.next.next.next.next = new intNode(6)

console.log('LIST INITIALLY: ')
head.printList(head);

console.log("\nTime complexity: O(n) to loop through the entire list \nSpace complexity: O(1), since no extra space is used");
console.log(`LinkedList has cycle: ${has_cycle(head)}`) 

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)} -- SHOULD BE TRUE`) 

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)} -- SHOULD BE TRUE`)

// ts-node 2-LinkedList-Cycle-\(easy\).ts