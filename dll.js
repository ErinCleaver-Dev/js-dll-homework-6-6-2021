export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {
    const newNode = new Node(value);

  // checks to see if the node exists 
    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; 
      this.tail = newNode;
    }
    this.length ++;
  }
  


  /**
   * Remove an item from the end of the linked list.
   */
  pop() {

    if(!this.length) { 
      return null;
    } else {
      // to hold the item to be removed 
      if(this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        // removes the old connections
        this.tail.next = null
      }
    }
    this.length --;
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
     if(!this.length) { 
      return null;
    } else {
      // to place the new value in head.
      this.head = this.head.next;
      // removes the old connections from the node.
      this.head.prev = null
    }
    this.length --;
  }
    
  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {
    // used to add a new node
    const newNode = new Node(value)
    
    // verifiy that the list is  empty 
    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {

      // Otherwise it adds the value to the new node.
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {

    // check to make sure that the list is not empty and that the index provided is not less then 0.
    if(!this.length || index < 0 || index>=this.length) {
      return null
    } else {
      let current;
      let counter = 0;
      current = this.head;
      // checks to see if the index is in the head
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current
    }
  }

 
  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    const currentNode = this.getNodeAtIndex(index);

    if(currentNode) {
      currentNode.value = value
    }
    else {
      return null;
    }
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {
    // check to make sure that the list is not empty and that the index provided is not less then 0.
  }

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {
    //checks to see if it is a valid index 
    if(!this.length || index < 0 || index >=this.length) {
      return null;
    } else if(index === 0) {
      this.shift();
    } else if(index === length - 1) {
      this.pop();
    } else {
      const remove = this.getNodeAtIndex(index);
      const preNode = remove.prev;
      const nextNode = remove.next;

      // Removes the value;
      remove.prev = null;
      remove.next = null;

      // connects the two nodes.
      prevNode.next = nextNode;
      nextNode = prevNode;

    }
    this.length--;
  }
}
