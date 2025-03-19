import Node from "./linked_list_node.js";

class LinkedList {
  constructor() {
    // this is where we `store` the actual values
    this.head = null;
    this.tail = null;
  }

  append(value) {
    //Adds a new node to the end of the linked list instance.
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
    //Adds a new node to the beginning of the linked list instance.
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
    //Returns the size of the linked list instance.
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

  at(index) {
    //Returns the node at the given index. Non inclusive index.
    if (index >= this.size()) {
      throw new Error("Index exceeds maximum linked list size");
    }
    if (index >= 0) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    } else {//negative index inclusive
      let currentNode = this.head;
      index = index + this.size();
      if (index < 0) {
        throw new Error("Negative index exceeds maximum linked list size");
      }
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  pop() {
    //Removes the last element from the linked list instance.
    if (!this.head || !this.tail) {
      return undefined;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    let lastNode = structuredClone(this.at(-1))
    let secondLastNode = this.at(-2)
    secondLastNode.nextNode = null;
    this.tail = secondLastNode;
    return lastNode;
  }

}

export default LinkedList;
