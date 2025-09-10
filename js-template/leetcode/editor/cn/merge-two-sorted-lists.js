/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=30008
 *
 * [21] 合并两个有序链表
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 双指针
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (l1, l2) {
  // 虚拟头结点
  let dummy = new ListNode(-1);
  let p = dummy;
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null && p2 !== null) {
    // 比较 p1 和 p2 两个指针
    // 将值较小的的节点接到 p 指针
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    // p 指针不断前进
    p = p.next;
    p.next = null;
  }

  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
};
// @lc code=end

// your test code here

let l1 = ListNode.createHead([1, 2, 4]);
let l2 = ListNode.createHead([1, 3, 4]);

let res = mergeTwoLists(l1, l2);

ListNode.print(res);

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
