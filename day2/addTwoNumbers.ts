// https://leetcode.com/problems/add-two-numbers/

// Definition of singly linked list node
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1: ListNode, l2: ListNode): ListNode | null {
  // sum
  var sum: ListNode | null = null;

  // carry
  var carry: number = 0;
  var pointerL1: ListNode | null = l1,
    pointerL2: ListNode | null = l2,
    pointerSum: ListNode | null = sum;

  // traverse both l1 and l2 and add them
  while (pointerL1 || pointerL2) {
    let placeSum = (pointerL1?.val || 0) + (pointerL2?.val || 0) + carry;
    // update carry
    carry = Math.floor(placeSum / 10);
    placeSum = placeSum % 10;
    if (sum == null) {
      sum = new ListNode(placeSum);
      pointerSum = sum;
    } else {
      pointerSum!.next = new ListNode(placeSum);
      pointerSum = pointerSum!.next;
    }

    pointerL1 = pointerL1?.next ? pointerL1.next : null;
    pointerL2 = pointerL2?.next ? pointerL2.next : null;
  }

  // add the carry if exists
  if (carry != 0) {
    pointerSum!.next = new ListNode(carry);
  }

  return sum;
};
