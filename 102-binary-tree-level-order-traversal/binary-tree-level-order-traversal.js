/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = []
    var preOrderTraversal =function(root, level){
        if(root === null){
            return;
        }
        if(!result[level]){
            result[level]=[]
            result[level].push(root.val)
        }else{
            result[level].push(root.val);
        }
        preOrderTraversal(root.left, level+1);
        preOrderTraversal(root.right , level+1);
        return ;
    }
    
    preOrderTraversal(root , 0)
    return result;
};