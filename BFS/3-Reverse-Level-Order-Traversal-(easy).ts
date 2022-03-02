/*  Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, 
    i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.



*/
import treeNode from '../treeNode';

const traverse = function(root: treeNode): any[] {
    // same as BFS inorder traversal, but add nodes to the start of the result array

    if(root == null) return [];

    let result = []
    let q = [root];

    while(q.length > 0){

        let levelSize = q.length;
        let levelNodes = [];
        for(let i=0; i<levelSize; ++i){

            let dqNode = q.shift();
            levelNodes.push(dqNode.value);
            if(dqNode.left) q.push(dqNode.left);
            if(dqNode.right) q.push(dqNode.right);
        }
        result.unshift(levelNodes);
    }
    return result;
}

let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Reverse Level order traversal: `, traverse(root));

// ts-node 2-Binary-Tree-Level-Order-Traversal-\(easy\).ts