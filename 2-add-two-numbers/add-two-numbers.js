/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0; 
    let finResult = []
    let r =0;
    let answer = 0;
    let node= null;
    while((l2 && l2.next != null) || (l1 && l1.next != null)){
        if(l1 && l2){
            r = l1.val + l2.val + carry;
            answer = r % 10;
            carry = Math.floor(r / 10);
            node =  new ListNode(answer , null)
            finResult.push(node);
            l1= l1.next;
            l2 = l2.next;
        }else if(l1 && !l2){
            r = l1.val + carry;
            answer = r % 10;
            carry =  Math.floor(r / 10);
            node =  new ListNode(answer , null)
            finResult.push(node);
            l1 = l1.next;
        }else if(l2 && !l1){
            r = l2.val + carry;
            answer = r % 10;
            carry =  Math.floor(r / 10);
            node =  new ListNode(answer , null)
            finResult.push(node);
            l2 = l2.next;
        }
    }
    if(l1 && l2){
        r = l1.val + l2.val + carry;
        answer = r % 10;
        carry =  Math.floor(r / 10);
        node =  new ListNode(answer , null);
        finResult.push(node);
        if(carry > 0){
            node =  new ListNode(carry , null);
            finResult.push(node);
        }
       
    }else if(l1 && !l2){
        r = l1.val + carry;
        answer = r % 10;
        carry =  Math.floor(r / 10);
        node =  new ListNode(answer , null);
        finResult.push(node);
        if(carry > 0){
            node =  new ListNode(carry , null);
            finResult.push(node);
        }
    }else if(l2 && !l1){
        r = l2.val + carry;
        answer = r % 10;
        carry =  Math.floor(r / 10);
        node =  new ListNode(answer , null);
        finResult.push(node);

        if(carry > 0){
            node =  new ListNode(carry , null);
            finResult.push(node);
        }
       
    }
    let curr = finResult[0]
    for(let i = 0 ; i< finResult.length-1 ; i++){
        finResult[i].next = finResult[i+1]
    }
    return curr;
};