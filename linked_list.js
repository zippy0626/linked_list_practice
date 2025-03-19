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

    let currentNode = this.head;

    let count = 0;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      count += 1;
    }

    return count;
  }

  at(index) {// not including the index
    if (index >= this.size()) {
      throw new Error("Index exceeds maximum linked list size");
    }
    if (index >= 0) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    } else {
      let currentNode = this.head;
      index = index + this.size();
      if (index < 0) {
        throw new Error("Negative index exceeds maximum linked list size");
      };
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }
}

export default LinkedList;

const linkedList = new LinkedList();

linkedList.append("bog");
linkedList.append("dog");
linkedList.append("sog");
linkedList.append("log");
linkedList.append("nog");
linkedList.append("rog");

linkedList.prepend("rag");
console.log(linkedList.at(-1));
