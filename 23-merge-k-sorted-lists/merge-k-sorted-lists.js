/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let result =[]
    if(lists.length === 0){
        return null;
    }
    
    for(let list of lists){
        current = list;
        if(!current){
            continue;
        }
        while(current){
            let newNode = new ListNode(current.val , null);
            result.push(newNode);
            current= current.next;
        }
    }
    if(result.length === 0){
        return null;
    }
    result.sort((a,b) => a.val - b.val);
    let head = result[0];
    for(let i =0 ; i< result.length-1 ; i++){
        result[i].next = result[i+1]
    }
    return head;
    
};