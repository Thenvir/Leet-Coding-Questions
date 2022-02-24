/*  Given the head of a Singly LinkedList, reverse the LinkedList. 
    Write a function to return the new head of the reversed LinkedList.
*/
import intNode from '../intNode';

const reverse = function(head: intNode): intNode {

    if(!head) return null;

    // IN PLACE version (only updating pointers -- no new nodes being created)
    let previous: intNode = null;
    let current: intNode = head; 

    while(current != null){
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    // RETURN previous -- its the reversed list
    return previous;

    // EXTRA MEMORY version (not in place)
    // let newHead = new intNode(head.value);
    // let headCopy = head.next;

    // while(headCopy != null){
    //     let currNode = new intNode(headCopy.value);
    //     currNode.next = newHead;
    //     newHead = currNode;

    //     headCopy = headCopy.next;
    // }
    
    // return newHead;
}

var head: intNode = new intNode(2)
head.next = new intNode(4)
head.next.next = new intNode(6)
head.next.next.next = new intNode(8)
head.next.next.next.next = new intNode(10)

console.log(`Original list:`);
head.printList(head);
head = reverse(head);
console.log(`Reverse list:`);
head.printList(head);

// ts-node 2-Reverse-a-LinkedList-\(easy\).ts