/*  Given the head of a LinkedList and a number ‘k’, 
    reverse every ‘k’ sized sub-list starting from the head.

    If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/

import intNode from '../intNode'

const reverse_every_k_elements = function(head: intNode, k: number): intNode {

    // normal reverse of sublist code:
    if(head == null || k<=1) return head;

    // loop through list till the current element-to-reverse is null
    // at the start of the loop, the left node (lastPrev) is previous -- so its null if its the 1st loop
    // at the start of the loop, the current node (lastNodeOfList) is current (head) -- & gets updated & acts as the node before the right node (rest of list)
    // in each loop, reverse from current node to the next k elements
    // connect the left node (lastPrevious) to the head of the new reversed sub list (previous), or make head = previous (if its first iteration & lastPrev=null)
    // connect the end of the new reversed sub list (lastNodeOfList) to the right node (current)
    // now, if the right node (current) is empty, break the loop because we're done
    // otherwise we need to keep going so set the new previous = to the end of the new reversed sub list (lastNodeOfList)

    let current = head;
    let previous = null;
    while(true){
        const lastPrev = previous;
        const lastNodeOfList = current;

        // normal LL reverse loop, but with a counter 'i' to loop for k iterations
        let i =0;
        while(current != null && i<k){
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            ++i;
        }
        // current is now at the right node following the reversed list

        // -- connect head of reversed list (previous) with previous part (lastPrev)
        // if its not the start of the list, then connect the lastPrev (left node) to the head of the reversed list (previous) -- matches normal LL reverse
        if(lastPrev != null){
            lastPrev.next = previous;
        }
        // but if its the start of the list, then the first elems got reversed, so make the head = the start of the reversed list
        else {
            head = previous;
        }
        // connect OG start of list (now the node before right node) with the right part of the list (current)
        lastNodeOfList.next = current;

        // if current is null, then the right part of the list is null, so stop the loop
        if(!current) break;

        // update the previous to be at the last node of the reversed list (ex: 4 -> 3 -> 2 where previous is set to '2')
        previous = lastNodeOfList;
    }
    return head;
}

var head = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)
head.next.next.next.next.next = new intNode(6)
head.next.next.next.next.next.next = new intNode(7)
head.next.next.next.next.next.next.next = new intNode(8)

console.log('LIST INITIALLY: ')
head.printList(head);

console.log('\nLIST After Reverse: ')
head = reverse_every_k_elements(head, 3);
head.printList(head);