class treeNode {

    value: number;
    left: treeNode;
    right: treeNode;

    constructor(value: number){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    printTree(){
        if(this.left != null){
            this.left.printTree();
        }
        console.log(this.value);
        if(this.right != null){
            this.right.printTree();
        }
    }

}

export default treeNode;