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
    if (!this.head || !this.tail) return 0;
    if (this.head === this.tail) return 1;

    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.nextNode;
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
    } else {//negative index is inclusive
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
      let lastNode = this.head;
      this.head = null;
      this.tail = null;
      return lastNode;
    }
    let lastNode = this.tail
    let secondLastNode = this.at(-2)
    secondLastNode.nextNode = null;
    this.tail = secondLastNode;
    return lastNode;
  }

  contains(value) {
    //Returns true if the passed value is in the linked list, otherwise returns false.
    if (!this.head || !this.tail) return false;
    let currentNode = this.head
    for (let i = 0; i < this.size(); i++) {
      let currentNodeValue = currentNode.value
      if (currentNodeValue === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

}

export default LinkedList;
