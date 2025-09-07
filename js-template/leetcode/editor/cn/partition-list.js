/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30202
 *
 * [86] 分隔链表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * v1 双指针
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function (head, x) {
  // 虚拟头节点：构造两个单链表
  let dummy1 = new ListNode(-1);
  let dummy2 = new ListNode(-1);
  let p = head;
  let p1 = dummy1;
  let p2 = dummy2;

  while (p !== null) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    let temp = p.next;
    p.next = null;
    p = temp;
  }
  // 连接两个单链表
  p1.next = dummy2.next;
  return dummy1.next;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */
