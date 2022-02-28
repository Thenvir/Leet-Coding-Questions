/*  Given a binary tree, populate an array to represent its level-by-level traversal. 
    You should populate the values of all nodes of each level from left to right in separate sub-arrays.
    
    Example output:
    [
        [12],
        [7, 1],
        [9, 10, 5]
    ]
*/
import treeNode from '../treeNode';

const traverse = function(root: treeNode) {
   
    let result: any[] = [];
    if (root == null) return result;

    let q = [];
    q.push(root);

    while(q.length > 0){
        let levelSize = q.length;
        let levelNodes = [];
        for(let i=0; i<levelSize; ++i){
            let dqnode: treeNode = q.shift();
            levelNodes.push(dqnode.value);
            if(dqnode.left) q.push(dqnode.left);
            if(dqnode.right) q.push(dqnode.right);
        }
        result.push(levelNodes);
    }
    return result;
}

let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Level order traversal: ${traverse(root)}`);

// ts-node 2-Binary-Tree-Level-Order-Traversal-\(easy\).ts