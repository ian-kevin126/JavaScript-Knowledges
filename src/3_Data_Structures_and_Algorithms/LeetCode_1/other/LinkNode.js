class Node{
  constructor(element){
    this.element = element
    this.next = null
  }
}
class LinkNodeList{
  constructor(){
    // 链表
    // 链表相关的操作

    // 链表的第一个元素
    this.head = null
    this.length = 0
  }
  // 增加
  append(element){
    let node = new Node(element)
    let cur

    // 两种情况 1。 链表仕空的，2. 不是空的
    if(this.head==null){
      // head是第一个
      this.head = node
    }else{
      // 遍历链表
      cur = this.head
      while(cur.next){
        cur = cur.next
      }
      cur.next = node
    }
    this.length += 1
  }
  removeAt(index){
    // 你的上一个节点，指向下一个节点
    // 把自己下一个节点指向取消
    let cur = this.head
    let prev 
    let i = 0
    if(index==0){
      // 删除第一项
      this.head = cur.next
    }else{
      while(i<index){
        // 上一个和当前都要保存
        prev = cur
        cur = cur.next
        i++
      }
      prev.next = cur.next
      cur.next = null
    }
    this.length -=1
    return cur.element

  }
  print(){
    let cur = this.head
    let ret = []
    while(cur){
      ret.push(cur.element)
      cur = cur.next
    }
    console.log(ret.join('==>'))
    return ret.join('==>')

  }

}

let linkNode = new LinkNodeList()
linkNode.append('哈喽')
linkNode.append('你瞅啥')
linkNode.append('嘿嘿')
linkNode.append('抽你咋地')
linkNode.print()
linkNode.removeAt(1)
linkNode.print()




