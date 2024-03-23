// 1-
// Instead of index, we have value
// And each value has a pointer to the next element
// So our list consists of data where each value points to the next value

// 2-
// To add data to the linked-list, this insertion is always done from the beginning or the end of the list for us.
// So it is useful in performance.

// When creating a custom data structure, using functions alone is not practical,
// because they undergo a specific process. Therefore, we need to use classes instead.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newElement = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newElement;
    }
    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  toArray() {
    const elements = [];

    let currentElement = this.head;

    while (currentElement) {
      elements.push(currentElement);
      currentElement = currentElement.next;
    }

    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append("s");
linkedList.append(true);

console.log(linkedList.toArray());
