/*  Given the head of a Singly LinkedList that contains a cycle, 
     write a function to find the starting node of the cycle.
*/
import intNode from '../intNode';

const find_cycle_start = function(head: intNode): intNode { 
    let slowHead: intNode = head;
    let fastHead: intNode = head;

    // must check fastHead.next for null, since otherwise you can't do the .next.next jump on a null
    while(fastHead != null && fastHead.next != null){
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
        if(slowHead == fastHead) return fastHead;
    }
    return head;
}  

var head: intNode = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)
head.next.next.next.next.next = new intNode(6)

console.log('LIST INITIALLY: ')
head.printList(head);

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value} -- SHOULD BE 3`) 

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value} -- SHOULD BE 4`) 

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value} -- SHOULD BE 1`)


// ts-node 2-Start-of-LinkedList-Cycle-\(medium\).tss