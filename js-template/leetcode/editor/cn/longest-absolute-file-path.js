/*
 * @lc app=leetcode.cn id=388 lang=javascript
 * @lcpr version=30203
 *
 * [388] 文件的最长绝对路径
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 栈
 * @param {string} input
 * @return {number}
 */
let lengthLongestPath = function (input) {
  let stack = []; // 保存当前文件的父路径
  let maxLen = 0;
  let parts = input.split("\n");
  for (let part of parts) {
    let level = part.lastIndexOf("\t") + 1; // 当前文件（目录）的层级
    while (level < stack.length) {
      // 让栈中只保留当前目录的父路径
      stack.pop();
    }
    stack.push(part.substring(level)); // 去除 \t
    // 如果是文件，就计算路径长度
    if (part.includes(".")) {
      let sum = stack.reduce((acc, val) => acc + val.length, 0);
      // 加上父路径的分隔符
      sum += stack.length - 1;
      maxLen = Math.max(maxLen, sum);
    }
  }
  return maxLen;
};
// @lc code=end

// your test code here
lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext");
/*
// @lcpr case=start
// "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"\n
// @lcpr case=end

// @lcpr case=start
// "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

// @lcpr case=start
// "file1.txt\nfile2.txt\nlongfile.txt"\n
// @lcpr case=end

 */
