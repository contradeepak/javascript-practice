19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.


Solution:

var removeNthFromEnd = function(head, n) {
        
    var result = new ListNode(0, head);
    var counter = 0;

    var getLastNode = (node) => {

        if (node.next == null) {
            counter++;
            return node;
        }

        else {

            var lastNode = getLastNode(node.next);

            if (counter == n) {
                node.next = lastNode.next ? lastNode.next : null;
            }

            counter++;
            return node;
        }
    };


    return getLastNode(result).next;
};