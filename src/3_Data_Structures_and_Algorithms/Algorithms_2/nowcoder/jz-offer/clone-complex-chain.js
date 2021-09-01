// 复杂链表的复制

// 题目描述
// 输入一个复杂链表（每个节点中有节点值，
// 以及两个指针，一个指向下一个节点，
// 另一个特殊指针指向任意一个节点），
// 返回结果为复制后复杂链表的head。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/

/**
 * @param {RandomListNode} pHead
 * @return {RandomListNode}
 */
function Clone(pHead) {
  if (!pHead) {
    return null;
  }
  let curNode, node, clone, tmp;
  curNode = pHead;
  while (curNode) {
    node = new RandomListNode(curNode.label);
    node.next = curNode.next;
    curNode.next = node;
    curNode = node.next;
  }
  curNode = pHead;
  while (curNode) {
    node = curNode.next;
    if (curNode.random) {
      node.random = curNode.random.next;
    }
    curNode = node.next;
  }
  clone = pHead.next;
  curNode = pHead;
  while (curNode.next) {
    tmp = curNode.next;
    curNode.next = tmp.next;
    curNode = tmp;
  }
  return clone;
}