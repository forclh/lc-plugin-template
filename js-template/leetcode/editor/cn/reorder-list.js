/*
 * @lc app=leetcode.cn id=143 lang=javascript
 * @lcpr version=30203
 *
 * [143] 重排链表
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
 * v1 栈的先进后出
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
let reorderList = function (head) {
  let stack = [];
  let p = head;
  // 先把所有节点装进栈里，得到倒序结果
  while (p !== null) {
    stack.push(p); // 这里只是把节点装入栈，但是节点再链表中的关系没有被改变
    p = p.next;
  }
  p = head;

  while (p !== null) {
    let lastNode = stack.pop();
    let next = p.next;
    if (lastNode === next || lastNode.next === next) {
      // 结束条件，链表节点数为奇数或偶数时均适用
      lastNode.next = null;
      break;
    }
    p.next = lastNode;
    lastNode.next = next;
    p = next;
  }
  return head;
};
// @lc code=end

// your test code here
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let newHead = reorderList(head);
/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

 */
