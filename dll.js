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
  setNodeAtIndex(index, value) {}

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {}

  /**
   * Remove a node at a specific index.
   */
  removeAtIndex(index) {}
}
