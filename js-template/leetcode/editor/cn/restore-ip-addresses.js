/*
 * @lc app=leetcode.cn id=93 lang=javascript
 * @lcpr version=30202
 *
 * [93] 复原 IP 地址
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 回溯算法
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function (s) {
  let result = [];
  let track = [];

  function backtrack(start) {
    // base case，走到叶子节点
    if (track.length === 4 && start === s.length) {
      // 即整个 s 被成功分割为合法的四部分，记下答案
      result.push(track.join("."));
      return;
    }

    if (track.length >= 4) {
      // 已经分解成 4 部分了，不能再分解了
      return;
    }

    for (let i = start; i < s.length; i++) {
      // 剪枝
      if (!isValid(s.substring(start, i + 1))) continue;
      // 做选择
      // s[start..i] 是一个合法的 ip 数字，可以进行分割
      track.push(s.substring(start, i + 1));
      // s[start..i] 是一个合法的 ip 数字，可以进行分割
      backtrack(i + 1);
      // 撤销选择
      track.pop();
    }
  }

  backtrack(0);
  return result;
};
// 判断字符串是不是一个合法的ip字段
function isValid(str) {
  // 1. 不能有前导零
  if (str.startsWith("0") && str.length !== 1) return false;
  // 2. 介于0-255之间
  if (Number(str) > 255) return false;
  return true;
}
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "25525511135"\n
// @lcpr case=end

// @lcpr case=start
// "0000"\n
// @lcpr case=end

// @lcpr case=start
// "101023"\n
// @lcpr case=end

 */
