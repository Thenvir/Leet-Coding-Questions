/*  Given a binary tree and a number ‘S’, find all paths from root-to-leaf 
    such that the sum of all the node values of each path equals ‘S’.
*/
import treeNode from '../treeNode';

const find_paths = function(root: treeNode, sum: number): any {

    // output array to hold paths
    var allpaths: any = [];
    let pathQueue: number[] = [];
    find_path_recursive(root, sum, pathQueue, allpaths);
    
    return allpaths;

}

const find_path_recursive = function (root: treeNode, sum: number, pathQueue: number[], allpaths: any): any {
    // 1st case: basic root null checking
    if(root == null) return;

    // valid node, so add to path
    pathQueue.push(root.value);

    // 2nd case: leaf
    if(root.left == null && root.right == null && root.value == sum){
        // found a path to the sum, so add path to output array
        allpaths.push(pathQueue.toString());
        console.log(`All when path found: ${allpaths}`);

    }
    // 3rd case: non - leaf, so recurse on left and right trees with updated sum target after sum-currNode.val
    else {
        find_path_recursive(root.left, sum-root.value, pathQueue, allpaths);
        find_path_recursive(root.right, sum-root.value, pathQueue, allpaths);
    }
    // done processing the current node (which was pushed at the start of function),
    // so now pop it off, allowing backtracking to take place with pathQueue 
    // (it doesn't ever reset to [], it resets to the path before currentNode was added)
    pathQueue.pop();
    // console.log(`All now: ${allpaths}`);
}

let root = new treeNode(12);
root.left = new treeNode(7);
root.right = new treeNode(1);

root.left.left = new treeNode(4);
root.right.left = new treeNode(10);
root.right.right = new treeNode(5);

console.log(`Path to 23?`, find_paths(root, 23));