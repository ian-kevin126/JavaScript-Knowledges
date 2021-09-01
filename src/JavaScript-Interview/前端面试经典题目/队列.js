class Queue {
  constructor(){
    this.items = []
  }

  enqueue(items){
    this.items.push(items)
  }

  empty(){
    this.items = [];
  }

  dequeue(){
    return this.items.shift();
  }

  get length(){
    return this.items.length;
  }

  get isEmpty(){
    return this.items.length === 0;
  }
}