const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let current = l;
  let dummy = new ListNode(); // Create a dummy node to simplify edge cases
  dummy.next = l;
  let previous = dummy;

  while (current !== null) {
    if (current.value === k) {
      // Skip the node with value k
      previous.next = current.next;
    } else {
      // Move to the next node
      previous = current;
    }

    // Move to the next node in the original list
    current = current.next;
  }

  return dummy.next; // Return the modified list, starting from the next of the dummy node
}

module.exports = {
  removeKFromList
};
