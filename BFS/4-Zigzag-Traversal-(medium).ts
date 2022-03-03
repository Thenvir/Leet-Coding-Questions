/*  Given a binary tree, populate an array to represent its zigzag level order traversal. 
    You should populate the values of all nodes of the first level from left to right, 
    then right to left for the next level and keep alternating in the same manner for the following levels.
*/
import treeNode from '../treeNode'

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

const zigzag = function(root: treeNode): number[][] {
    
    if(root == null) return [[]];

    let result = [];

    let q = [root];
    let zig = true;

    while(q.length > 0){

        let levelSize = q.length;
        let levelNodes = []

        // push or unshift the nodes, based on zig or zag
        for(let i =0; i< levelSize; ++i){
            let dqNode = q.shift();
            // everything the same for zig/zag, except whetehr we push or unshift to the levelNodes array
            if(zig){
                levelNodes.push(dqNode.value);
            } else {
                levelNodes.unshift(dqNode.value);
            }
            if(dqNode.left) q.push(dqNode.left)
            if(dqNode.right) q.push(dqNode.right)
        }
        result.push(levelNodes);
        // ONLY change zig to zag after the entire level is done
        zig = !zig;
    }
    return result;
}


let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.left.right = new treeNode(2);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Normal Travserse: `, traverse(root));
console.log(`\nZig Zag: `, zigzag(root));
