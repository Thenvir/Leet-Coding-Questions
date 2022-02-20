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

export default intNode;