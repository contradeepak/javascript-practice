function createNode(value){
    return{
        data: value,
        next: null,
    }
}

function display(head){
    let temp = head;
    while(temp != null){
    console.log(temp.data);
    temp = temp.next;
    }
}

function addAtHead(head, data){
    let newNode = createNode(data); // this creates a new node with data
    newNode.next = head; // this step attaches the new node to the head of the list
    head = newNode; // this step updates the head of the list
    return head; // return the head
}

let head = null; // when the linked list is empty head is null

head = addAtHead(head, 10);
head = addAtHead(head, 20);
head = addAtHead(head, 30);
head = addAtHead(head, 40);
head = addAtHead(head, 50);
head = addAtHead(head, 60);
display(head);
