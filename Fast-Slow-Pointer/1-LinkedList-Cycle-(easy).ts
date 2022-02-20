/*  Given the head of a Singly LinkedList, 
    write a function to determine if the LinkedList has a cycle in it or not.
*/

class intNode {
    
    value: number;
    next: intNode | null;

    constructor(value: number, next: intNode | null = null){
        this.value = value;
        this.next = next;
    }

    printList(head: intNode): void {
        let s:string = '';
        while(head != null){
            s += ' ' + head.value + ' ->';
            head = head.next;
        }
        console.log(s);
    }
}

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

let head = new intNode(1)
head.next = new intNode(2)
head.next.next = new intNode(3)
head.next.next.next = new intNode(4)
head.next.next.next.next = new intNode(5)
head.next.next.next.next.next = new intNode(6)

console.log('LIST INITIALLY: ')
head.printList(head);

console.log(`LinkedList has cycle: ${has_cycle(head)}`) 

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)} -- SHOULD BE TRUE`) 

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)} -- SHOULD BE TRUE`)

// ts-node 1-LinkedList-Cycle-\(easy\).ts