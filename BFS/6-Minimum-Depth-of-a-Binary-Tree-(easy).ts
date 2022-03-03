/*  Find the minimum depth of a binary tree. 
    The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
*/

import treeNode from '../treeNode';


const find_minimum_depth = function(root: treeNode): number {

    // base case
    if(root == null) return 0;

    let count = 0;

    let q = [root];

    while(q.length > 0){

        count++;
        let levelSize = q.length;
        for(let i=0; i<levelSize; ++i){
            let dqNode = q.shift();
            // In order to find the MINIMUM depth, we should return as soon as we hit a leaf node
            // ie. we return immediately with the current count, instead of returning total count at the end (which is total depth)
            if(dqNode.left == null && dqNode.right == null) return count;
            if(dqNode.left) q.push(dqNode.left);
            if(dqNode.right) q.push(dqNode.right);
        }
    }
}

let root = new treeNode(12);
root.left = new treeNode(7);

root.right = new treeNode(1);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Min Depth BEFORE: `, find_minimum_depth(root));

root.left.left = new treeNode(9);
root.left.right = new treeNode(2);
console.log(`Min Depth AFTER: `, find_minimum_depth(root));

console.log(`Min Depth SINGLE NODE: `, find_minimum_depth(new treeNode(12)));
