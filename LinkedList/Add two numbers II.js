445. Add Two Numbers II


You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Solution:

var addTwoNumbers = function(l1, l2) {
    let rev1 = reverseLinkedList(l1);
  let rev2 = reverseLinkedList(l2);
  
  let carry = 0;
  let result = null;
  
  while (rev1 !== null || rev2 !== null || carry !== 0) {
    let sum = carry;
    if (rev1 !== null) {
      sum += rev1.val;
      rev1 = rev1.next;
    }
    if (rev2 !== null) {
      sum += rev2.val;
      rev2 = rev2.next;
    }
    
    carry = Math.floor(sum / 10);
    sum %= 10;
    
    let newNode = new ListNode(sum);
    newNode.next = result;
    result = newNode;
  }
  
  return result;
};

const reverseLinkedList = function(head) {
  let prev = null;
  let curr = head;
  
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;