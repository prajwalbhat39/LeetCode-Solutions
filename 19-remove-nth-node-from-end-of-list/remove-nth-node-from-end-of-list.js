/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    let length = 1;
    if(head === null){
        return null;
    }
    while(curr.next != null){
        curr = curr.next;
        length++;
    }
    curr = head;
    let i = 1;
    while(i <length-n){
        curr= curr.next;
        i++;
    }
    if(curr === head && length === n){
        head = head.next;
        return head;
    }
    let next = curr.next;
    curr.next = next.next;
    return head;
};
// You must run your code first$0