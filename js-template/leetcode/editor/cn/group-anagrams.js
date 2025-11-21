/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30300
 *
 * [49] 字母异位词分组
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 哈希表
 *
 * 利用字母出现的次数进行编码，使得将字母异位词编码结果相同
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const encodeStr = encode(str);
    if (!map.has(encodeStr)) {
      map.set(encodeStr, []);
    }
    map.get(encodeStr).push(str);
  }

  return [...map.values()];
};

const encode = (str) => {
  // 将输入的字符串根据字母出现的次数进行编码
  const code = new Array(26).fill(0);
  for (const s of str) {
    const index = s.charCodeAt(0) - "a".charCodeAt(0);
    code[index]++;
  }
  return code.join("#");
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
