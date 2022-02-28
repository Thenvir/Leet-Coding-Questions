/*  Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf 
    such that the sum of all the node values of that path equals ‘S’.  
*/
import treeNode from '../treeNode';

const has_path = function(root: treeNode, sum: number): boolean {
    if(root == null) return false;

    // root to leaf path problem, so use DFS
    // if curr node is a leaf, and its value is the remaining value needed, return true;
    if(root.left == null && root.right == null){
        if(root.value === sum) return true;
        return false;
    }    

    // not a leaf node, so calc the remaining sum needed after this visit
    sum = sum - root.value;
    
    // return true if either left or right paths return true
    return has_path(root.left, sum) || has_path(root.right, sum);
}

let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(9);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Path to 23? ${has_path(root, 23)}`);
console.log(`Path to 16? ${has_path(root, 16)}`);