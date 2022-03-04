/*  Given a binary tree and a number sequence, 
    find if the sequence is present as a root-to-leaf path in the given tree.
*/

import treeNode from '../treeNode';

const find_path = function(root: treeNode, sequence: number[]): boolean {

    // null check early of sequence is also empty
    if(root == null) return sequence.length == 0

    return find_path_recursive(root, sequence, 0);
}

const find_path_recursive = function (root: treeNode, sequence: number[], index: number): boolean {

    // case 1: null
    if(root == null) return false;

    // At the current node, do matching & check if index is still valid
    let len = sequence.length;
    if(index >= len || root.value !== sequence[index]) return false


    // case 2: leaf + we know the value matches with the current index
    // only need to check if index is done with the array (at len -1)
    if(root.left == null && root.right == null && index == len-1){
        return true;
    }
    
    return find_path_recursive(root.left, sequence, index + 1) || find_path_recursive(root.right, sequence, index + 1)

}

let root = new treeNode(1);
root.left = new treeNode(0);
root.right = new treeNode(1);

root.left.left = new treeNode(1);
root.right.left = new treeNode(6);
root.right.right = new treeNode(5);

let s1 = [1, 0, 7];
let s2 = [1, 1, 6];

console.log(`Path Exists for ${s1}?: `, find_path(root, s1));
console.log(`Path Exists for ${s2}?: `, find_path(root, s2));