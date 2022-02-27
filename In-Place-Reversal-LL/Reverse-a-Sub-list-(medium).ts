/*  Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

    Ex: rev(1->2->3->4->5, p=2, q=4) =>  1->4->3->2->5
*/
import intNode from '../intNode';

const reverse_sub_list = function(head: intNode, p: number, q: number): intNode {

    // let before = null;
    // let after = null;
    // let prev = null;
    // let headCopy = head;

    // while(headCopy != null){
    //     let next = headCopy.next;
    //     headCopy.next = prev;
    //     prev = headCopy;
    //     headCopy = next;
    // }
    // return prev;

    // edge case, not needed but saves work anyways
    if(p === q) return head;

    // dummy = 0 -> rest of list...
    // helps deal with edge case where p is 1st element
    // and gives an easy pointer to the head once all reversals are done
    let dummy = new intNode(0);
    dummy.next = head;

    //  first part -- 2 pointer approach
    // by the end, curr is the 1st node that needs to be reversed
    // and leftPrev is the node before it (will be used to connect in the end)
    let leftPrev = dummy;
    let curr = head;
    let counter = 1;
    while(counter < p){
        leftPrev = curr;
        curr = curr.next;
        ++counter;
    }

    // reverse using normal 2 pointer method
    let prev = null;
    // pre2 acts as the 'prev' of a normal LL-reverse
    for(let i=p; i<=q; i++){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // now the elemens betweem p and q have been reversed 
    // --> need to connect the end of the reversed list (newEnd) to the element right after q (curr points there after the last loop)
    let newEnd = leftPrev.next; // in the example, leftPrev is 1 which is still pointing to 2, and newEnd is 2 after reversal
    newEnd.next = curr;
    // --> need to connect leftPrev to the new beginning of the reversed list (prev points there after the reversal loop)
    leftPrev.next = prev;
    return dummy.next;
}

var head = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)

console.log(`ORIGINAL LIST:`);
head.printList(head);
console.log(`REVERSE LIST:`);
head = reverse_sub_list(head, 2, 4);
head.printList(head);
