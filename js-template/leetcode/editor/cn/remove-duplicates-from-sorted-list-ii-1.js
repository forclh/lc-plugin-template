/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30202
 *
 * [82] 删除排序链表中的重复元素 II
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
 * v1 双指针（快慢指针）
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  const dummy = new ListNode(-1);
  let p = dummy;
  let q = head;

  while (q !== null) {
    if (q.next !== null && q.val === q.next.val) {
      // 有重复元素
      while (q.next !== null && q.val === q.next.val) {
        q = q.next;
      }
      q = q.next;
      // 此时已经跳过了一段重复元素
      if (q === null) p.next = null;
      // 不过下一段元素也可能重复，等下一轮 while 循环判断
    } else {
      p.next = q;
      p = p.next;
      q = q.next;
    }
  }

  return dummy.next;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */
