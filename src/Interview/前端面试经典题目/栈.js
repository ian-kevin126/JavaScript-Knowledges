class Stack {
  constructor() {
    this.items = []
  }

  push(item){
    this.items.push(item)
  }

  pop(){
    return this.items.pop();
  }

  clear(){
    this.items = []
  }

  get size (){
    return this.items.length
  }

  get isEmpty(){
    return this.items.length === 0
  }
}