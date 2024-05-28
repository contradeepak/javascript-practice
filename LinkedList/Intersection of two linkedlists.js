160. Intersection of Two Linked Lists


Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


Solution:


var getIntersectionNode = function(headA, headB) {
    let aList = headA;
let bList = headB;

while (aList && bList) {
    if (aList === bList) {
        return aList;
    }
    
    aList = aList.next;
    bList = bList.next;
    
    if (!aList) {
        aList = headB;
        headB = null;
    }
    
    if (!bList) {
        bList = headA;
        headA = null;
    }
}

return null;
};