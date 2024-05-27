206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:



Solution: 


var reverseList = function(head) {
       
    if(!head || !head.next) return head
    reversedPart=reverseList(head.next)
    head.next.next=head
    head.next=null
    return reversedPart
};