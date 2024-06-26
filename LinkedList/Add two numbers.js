2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Solution:


var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head to simplify the code
   let current = dummyHead;
   let carry = 0;

   while (l1 || l2) {
       let x = l1 ? l1.val : 0;
       let y = l2 ? l2.val : 0;
       let sum = carry + x + y;

       carry = Math.floor(sum / 10);
       current.next = new ListNode(sum % 10);
       current = current.next;

       if (l1) l1 = l1.next;
       if (l2) l2 = l2.next;
   }

   if (carry > 0) {
       current.next = new ListNode(carry);
   }

   return dummyHead.next;
};