class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  //Append data
  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }

    if (data instanceof linkedList) {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = data.head;
      return;
    }

    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  //Prepend data
  prepend(data) {
    if (data instanceof linkedList) {
      let current = data.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = this.head;
      this.head = data.head;
      return;
    }

    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    let firstNode = new Node(data);
    firstNode.next = this.head;
    this.head = firstNode;
  }

  //Find number of nodes in linked list
  length() {
    if (this.head == null) {
      return 0;
    }
    let counter = 1;
    let current = this.head;

    while (current.next != null) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  delete(data) {
    if (this.head == null) {
      return;
    }
    let current = this.head;

    if (current.value == data) {
      this.head = current.next;
      return;
    }

    while (current.next.value != data) {
      //console.log(current.value);
      current = current.next;
      if (current.next == null) {
        throw "Number not found";
      }
    }
    current.next = current.next.next;
  }
}

let list1 = new linkedList();
list1.append(6);
list1.append(8);
list1.prepend(100);
list1.prepend(200);
list1.append(10);
list1.append(14);

let list2 = new linkedList();
list2.append(100);
list2.append(50);
list2.prepend(25);

list1.prepend(list2);

console.log("Length of linked list is: ", list1.length());

let cur = list1.head;
while (cur != null) {
  console.log(cur.value);
  cur = cur.next;
}
