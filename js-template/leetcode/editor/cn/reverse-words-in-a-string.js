/*
 * @lc app=leetcode.cn id=151 lang=javascript
 * @lcpr version=30203
 *
 * [151] 反转字符串中的单词
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 整体反转后再部分反转
 * @param {string} s
 * @return {string}
 */
let reverseWords = function (s) {
  let sb = "";
  // 先清洗一下数据，把多于的空格都删掉
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c !== " ") {
      // 单词中的字母/数字
      sb += c;
    } else if (sb.length > 0 && sb[sb.length - 1] !== " ") {
      // 单词之间保留一个空格
      sb += " ";
    }
  }
  if (sb.length === 0) {
    return "";
  }
  // 末尾如果有空格，清除之
  if (sb[sb.length - 1] === " ") {
    sb = sb.slice(0, sb.length - 1);
  }

  // 清洗之后的字符串
  let chars = sb.split("");
  let n = chars.length;
  // 进行单词的翻转，先整体翻转
  reverse(chars, 0, n - 1);
  // 再把每个单词翻转
  for (let i = 0; i < n; ) {
    for (let j = i; j < n; j++) {
      if (j + 1 === n || chars[j + 1] === " ") {
        // chars[i..j] 是一个单词，翻转之
        reverse(chars, i, j);
        // 把 i 置为下一个单词的首字母
        i = j + 2;
        break;
      }
    }
  }
  // 最后得到题目想要的结果
  return chars.join("");
};

// 翻转 arr[i..j]
function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

// @lc code=end

// your test code here

/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */
