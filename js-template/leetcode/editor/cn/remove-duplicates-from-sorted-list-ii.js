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
 * v1 双指针（分解链表）
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  let dummyDup = new ListNode(-101);
  let dummyUniq = new ListNode(-102);
  let pDup = dummyDup;
  let pUniq = dummyUniq;
  let p = head;
  // 遍历原始链表
  while (p !== null) {
    // 判断是否具有重复节点
    if (p.val === pDup.val || (p.next !== null && p.val === p.next.val)) {
      // 发现重复节点，接到重复链表后面
      pDup.next = p;
      pDup = pDup.next;
    } else {
      // 不是重复节点，接到不重复链表后面
      pUniq.next = p;
      pUniq = pUniq.next;
    }
    p = p.next;
    // 将原链表和新链表断开
    pUniq.next = null;
    pDup.next = null;
  }

  return dummyUniq.next;
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
