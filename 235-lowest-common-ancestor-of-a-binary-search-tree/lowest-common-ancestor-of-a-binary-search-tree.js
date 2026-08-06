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
    let parentsP= []
    let parentsQ= [] 
    let newNode = null;

    var searchNode = function(root ,p , array) {
        newNode =  new TreeNode(root.val)
        array.push(newNode);

        if(p.val< root.val){
            searchNode(root.left , p , array)
        }else if(p.val > root.val){
            searchNode(root.right , p ,array);
        }else{
            return;
        }
        return;
    }
    

    searchNode(root , p , parentsP);
    searchNode(root , q , parentsQ);

    minLength = parentsP.length <= parentsQ.length ? parentsP.length : parentsQ.length;

    let result = 0;
    
    for(i = 0 ; i<minLength ; i++){
        if(parentsP[i].val === parentsQ[i].val){
            result = parentsP[i]
        }
    }
    return result;
    
};