/*  Given a binary tree where each node can only have a digit (0-9) value, 
    each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
*/

import treeNode from '../treeNode';

const find_total_path_sum = function(root: treeNode): number {

    let sum = 0;
    return find_total_path_sum_recursive(root, sum);
}

const find_total_path_sum_recursive = function (root: treeNode, sum: number): any {

    // case 1: null
    if(root == null) return 0;

    sum = (10 * sum) + root.value;

    // case 2: leaf
    if(root.left == null && root.right == null){
        return sum;
    }
    // case 3: non - leaf
    else {
        return find_total_path_sum_recursive(root.left, sum) + find_total_path_sum_recursive(root.right, sum);
    }
}

let root = new treeNode(1);
root.left = new treeNode(0);
root.right = new treeNode(1);

root.left.left = new treeNode(1);
root.right.left = new treeNode(6);
root.right.right = new treeNode(5);

console.log(`Sum of all paths: `, find_total_path_sum(root));
// console.log(`Path to 16? ${num_paths(root, 16)}`);