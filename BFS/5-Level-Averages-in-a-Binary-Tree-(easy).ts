/* Given a binary tree, populate an array to represent the averages of all of its levels.
*/

import treeNode from '../treeNode';

const find_average_level = function (root: treeNode): Number[] {

    if(root == null) return []

    let result = [];
    let q = [root]

    while(q.length > 0){

        let levelSize = q.length;
        let sum = 0;

        for(let i=0; i<levelSize; ++i){
            let dqNode = q.shift()
            sum += dqNode.value;
            if(dqNode.left) q.push(dqNode.left);
            if(dqNode.right) q.push(dqNode.right);
        }
        result.push(sum/levelSize);
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

console.log(`Reverse Level order traversal: `, find_average_level(root));