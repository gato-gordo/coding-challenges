// *
//  * Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // create new list
    // traverse lists in parallel
    // add digits (keep carry variable)
    let carry = 0;
    let curVal = l1.val + l2.val;
    if (curVal > 9) {
        carry = 1;
        curVal = curVal % 10;
    }
    let newList =  new ListNode(curVal);
    let pointer = newList;
    while ((l1 && l1.next !== null) || (l2 &&l2.next !== null)) {
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
        curVal = carry + (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0);
        if (curVal > 9) {
            carry = 1;
            curVal = curVal % 10;
        } else {
            carry = 0;
        }
        pointer.next = new ListNode(curVal);
        pointer = pointer.next;
    }
    if (carry) {
        pointer.next = new ListNode(1);
    }
    return newList;
};