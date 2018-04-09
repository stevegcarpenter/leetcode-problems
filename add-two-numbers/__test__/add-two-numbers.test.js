'use strict';

const ListNode = require('../lib/listnode');
const addTwoNumbers = require('../lib/add-two-numbers');
require('jest');

describe('#addTwoNumbers', () => {
  describe('Valid Cases', () => {
    it('should correctly add two numbers of the same length', () => {
      // 342 + 465 = 807
      let l1 = new ListNode(3);
      let tmp = new ListNode(4);
      tmp.next = l1;
      l1 = tmp;
      tmp = new ListNode(2);
      tmp.next = l1;
      l1 = tmp;
      let l2 = new ListNode(4);
      tmp = new ListNode(6);
      tmp.next = l2;
      l2 = tmp;
      tmp = new ListNode(5);
      tmp.next = l2;
      l2 = tmp;

      let newlist = addTwoNumbers(l1, l2);
      expect(newlist.val).toEqual(7);
      expect(newlist.next.val).toEqual(0);
      expect(newlist.next.next.val).toEqual(8);
    });

    it('should correctly add two lists even if they differ in length', () => {
      // 3 + 465 = 468
      let l1 = new ListNode(3);
      let l2 = new ListNode(4);
      let tmp = new ListNode(6);
      tmp.next = l2;
      l2 = tmp;
      tmp = new ListNode(5);
      tmp.next = l2;
      l2 = tmp;

      let newlist = addTwoNumbers(l1, l2);
      expect(newlist.val).toEqual(8);
      expect(newlist.next.val).toEqual(6);
      expect(newlist.next.next.val).toEqual(4);
    });

    it('should correctly handle multiple carries', () => {
      // 99 + 9999 = 10098
      let l1 = new ListNode(9);
      let tmp = new ListNode(9);
      tmp.next = l1;
      l1 = tmp;
      let l2 = new ListNode(9);
      tmp = new ListNode(9);
      tmp.next = l2;
      l2 = tmp;
      tmp = new ListNode(9);
      tmp.next = l2;
      l2 = tmp;
      tmp = new ListNode(9);
      tmp.next = l2;
      l2 = tmp;

      let newlist = addTwoNumbers(l1, l2);
      expect(newlist.val).toEqual(8);
      expect(newlist.next.val).toEqual(9);
      expect(newlist.next.next.val).toEqual(0);
      expect(newlist.next.next.next.val).toEqual(0);
      expect(newlist.next.next.next.next.val).toEqual(1);
    });
  });

  describe('Invalid cases', () => {
    it('should correctly return back null when both lists are null', () => {
      expect(addTwoNumbers(null, null)).toBeNull();
    });

    it('should correctly return list 1 if list 2 is null', () => {
      let list = new ListNode(7);
      expect(addTwoNumbers(null, list)).toEqual(list);
    });

    it('should correctly return list 2 if list 1 is null', () => {
      let list = new ListNode(7);
      expect(addTwoNumbers(list, null)).toEqual(list);
    });
  });
});
