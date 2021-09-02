var reverseList = function(head) {
    
    if (head == null || head.next == null) {
        return head;
    }
    
    let tail = head;
    let current = head.next;
    
    while (current != null) {
        tail.next = current.next;
        current.next = head;
        head = current;
        current = tail.next;
    }
    
    return head;
    
};
