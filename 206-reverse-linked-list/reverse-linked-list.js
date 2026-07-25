/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null){
        return head;
    }
    if(head.next=== null){
        return head;
    }
    let prev = head;
    let curr = prev.next
    prev.next =null;
    while(curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;

    
    
};