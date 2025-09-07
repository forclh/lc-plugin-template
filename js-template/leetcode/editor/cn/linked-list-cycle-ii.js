/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30202
 *
 * [142] 环形链表 II
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * v1 双指针（快慢指针）
 * @param {ListNode} head
 * @return {ListNode}
 */
let detectCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break; // 有环
    }
  }
  // 无环
  if (fast === null || fast.next === null) {
    return null;
  }
  // 重新指到头节点
  slow = head;
  // 快慢指针同步前进，相交点就是环起点
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */
