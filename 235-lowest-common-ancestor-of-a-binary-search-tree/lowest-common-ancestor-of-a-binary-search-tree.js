/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    let result = null;
    var searchNode = function( pointerP, pointerQ ,p , q) {
        if(pointerP.val === pointerQ.val){
            result = pointerP;
        }
       if(p.val < pointerP.val && q.val < pointerQ.val){
         searchNode(pointerP.left , pointerQ.left , p , q)
       }else if(p.val > pointerP.val && q.val > pointerQ.val){
        searchNode(pointerP.right , pointerQ.right , p , q)
       }
        return ;
    }
    
    searchNode(root ,root , p , q);
    return result;
    
};