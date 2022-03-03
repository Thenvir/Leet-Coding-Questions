/*  Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
*/
// this requires treenode to have a right pointer, so there's error for that reason
import treeNode from '../treeNode';

const connect_level_order_siblings = function(root: treeNode): void {

    if(root == null) return;

    let q = [root]
    
    while(q.length > 0){

        let levelSize = q.length;
        // prev resets to null after every level, allowing last node in the level to point to null
        let prev = null;

        for(let i=0; i<levelSize; ++i){
            let dqNode = q.shift();
            
            // if its not the first loop, prev is the prev node -- so connect it with its current on 
            if(prev != null){
                prev.next = dqNode;
            }
            // prev always becomes the current node
            prev = dqNode;

            if(dqNode.left) q.push(dqNode.left);
            if(dqNode.right) q.push(dqNode.right);
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

console.log(`Connected siblngs `, connect_level_order_siblings(root));