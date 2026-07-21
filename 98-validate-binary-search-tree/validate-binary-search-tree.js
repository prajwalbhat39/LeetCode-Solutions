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
 * @return {boolean}
 */
var checkLeftSubtree = function(root){
    if(root.left != null && root.left.val >= root.val){
        return false;
    }
    let temp = root.left;
    if(temp === null){
        return true;
    }
    while(temp.right != null){
        temp= temp.right
    }
    if(temp.val >= root.val){
        return false;
    }
    return true;
}

var checkRightSubtree = function(root) {
    
    if (root.right != null && root.right.val <= root.val) {
        return false;
    }
    let temp = root.right;

    if(temp === null){
        return true;
    }
    while (temp.left != null) {
        temp = temp.left;
    }
    if (temp.val <= root.val) {
        return false;
    }
    return true;
}
var isValidBST = function(root) {
    if(root === null){
        return true;
    }

    let finalLeft = isValidBST(root.left);
    let finalRight = isValidBST(root.right);

    let left = checkLeftSubtree(root);
    let right = checkRightSubtree(root);

    if(!left || !right || !finalRight || !finalLeft){
        return false;
    }
    return true;
    
};