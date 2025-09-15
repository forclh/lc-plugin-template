/*
 * @lc app=leetcode.cn id=71 lang=javascript
 * @lcpr version=30203
 *
 * [71] 简化路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 栈的先进后出
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
  let stack = [];
  let parts = path.split("/");
  for (let part of parts) {
    if (part === "" || part === ".") {
      continue;
    }
    if (part === "..") {
      // 返回上一级目录
      stack.length > 0 ? stack.pop() : "";
      continue;
    }
    stack.push(part);
  }
  let res = "";
  while (stack.length > 0) {
    res = "/" + stack.pop() + res; // 反向拼接
  }
  return res === "" ? "/" : res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// "/home/"\n
// @lcpr case=end

// @lcpr case=start
// "/home//foo/"\n
// @lcpr case=end

// @lcpr case=start
// "/home/user/Documents/../Pictures"\n
// @lcpr case=end

// @lcpr case=start
// "/../"\n
// @lcpr case=end

// @lcpr case=start
// "/.../a/../b/c/../d/./"\n
// @lcpr case=end

 */
