var deleteDuplicates = function(head) {
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        while (next !== null && cur.val === next.val) {
            next = next.next;
        }
        cur.next = next;
        cur = next;
    }
    return head;
};