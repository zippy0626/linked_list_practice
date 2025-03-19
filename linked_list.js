import Node from "./linked_list_node.js";

class LinkedList {
  constructor() {
    //init a head and tail
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = this.tail.nextNode;
    }
  }

  prepend() {}
}

export default LinkedList;

const linkedList = new LinkedList()
console.log(linkedList.head, linkedList.tail)