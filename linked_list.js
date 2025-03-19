import Node from "./linked_list_node.js";

class LinkedList {
  constructor() {
    // this is where we `store` the actual values
    this.head = null;
    this.tail = null;
  }

  // `this` refers to the classes' instance's context
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

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    if (!this.head || !this.tail) {
      return 0;
    }
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.nextNode
      count += 1;
    }

    return count;
  }


}

export default LinkedList;
