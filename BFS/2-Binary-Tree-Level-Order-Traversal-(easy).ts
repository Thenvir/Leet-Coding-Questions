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
   
   // easy edge case
   if(root == null) return [];

   // BFS problem since we're doing in order traversal

   // need a results array for output
   // & need a Queue for BFS (start with the root in the Queue)
   let results: any[] = [];
   let q = [root];

    // start process of handling all elements in the Queue, till Queue is empty
    while(q.length > 0){

        let levelNodes = [];
        // need to keep size of the current Queue, during each loop
        let levelSize = q.length;
        // for all tree nodes in the Queue
        for(let i =0; i< levelSize; i++){
            // get the node (shift returns 1st elem)
            let dqNode = q.shift();
            // add the node's value to the levelNoodes array
            levelNodes.push(dqNode.value);
            // add its children to the Queue if they exist
            if(dqNode.left) q.push(dqNode.left);
            if(dqNode.right) q.push(dqNode.right);
        }
        // now that the levelNodes for that level have been filled, push it to the result array
        results.push(levelNodes);
    }
   return results;
}

let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Level order traversal:`, traverse(root));

// ts-node 2-Binary-Tree-Level-Order-Traversal-\(easy\).ts