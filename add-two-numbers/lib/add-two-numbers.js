'use strict';

const ListNode = require('./listnode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 **/
module.exports = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let newlist = new ListNode(0);
  let carry = 0;
  let sum;
  let head = newlist;

  while (l1 || l2 || carry) {
    sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (carry) {
      sum += carry;
      carry = 0;
    }
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }

    head.next = new ListNode(sum);
    head = head.next;
  }

  return newlist.next;
};
