21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Solution:


var mergeTwoLists = function(list1, list2) {
    mergedHead = {val: -1, next: null},
      crrt = mergedHead;
  
      while (list1 && list2) { 
          if (list1.val <= list2.val) {
              crrt.next = list1;
              list1 = list1.next;
          }
          else {
              crrt.next = list2;
              list2 = list2.next;
          }
          crrt = crrt.next;
      }
  
      crrt.next = list1 || list2;
      return mergedHead.next;
  };