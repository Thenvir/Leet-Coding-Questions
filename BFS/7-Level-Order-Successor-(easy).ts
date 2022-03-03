/*  Given a binary tree and a node, find the level order successor of the given node in the tree. 
    The level order successor is the node that appears right after the given node in the level order traversal.
*/

import treeNode from '../treeNode';

// Flag approach - totally fine & works
// const find_successor = function(root: treeNode, key: number): number {
    
//     if(root == null) return -1;

//     let q = [root];
//     let keyFlag = false;
//     let nextKeyFlag = false;
//     let index = -1;

//     while(q.length > 0){

//         let levelSize = q.length;
//         let levelNodes = [];

//         for(let i=0; i<levelSize; ++i){
//             let dqNode = q.shift();
//             levelNodes.push(dqNode.value);

//             // at the level of the key
//             if(dqNode.value == key){
//                 // if key is the last node of the level, get from next level, else get from this level
//                 if(i == levelSize - 1){
//                     nextKeyFlag = true;
//                     index = 0;
//                 } else {
//                     keyFlag = true;
//                     index = levelNodes.length;
//                 }
//             }

//             if(dqNode.left) q.push(dqNode.left);
//             if(dqNode.right) q.push(dqNode.right)
//         }
//         if(keyFlag){
//             return levelNodes[index];
//         }
//         if(nextKeyFlag){
//             keyFlag = true;
//         }
//     }

// }

const find_successor = function(root: treeNode, key: number): number {

    if(root == null) return -1;
    let q = [root]

    while(q.length > 0){
        // instead of running a for loop insde, just keep adding all nodes until you find the key node
        // don't need a nested for loop cuz we don't care about processing on EACH LEVEL

        let dqNode = q.shift();

        if(dqNode.left) q.push(dqNode.left);
        if(dqNode.right) q.push(dqNode.right);

        // check after adding its children, so we can peek the successor in case dqNode is the key
        if(dqNode.value == key){
            return q[0].value;
        }
    }
}


let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.left.right = new treeNode(2);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Successor: `, find_successor(root, 10));