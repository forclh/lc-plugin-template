/*
 * @lc app=leetcode.cn id=127 lang=javascript
 * @lcpr version=30304
 *
 * [127] 单词接龙
 */

import { ListNode } from "../common/listNode.js";
import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v2 双向 BFS
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  // 从字典中移除起点，避免重复访问
  wordSet.delete(beginWord);

  // 双向 BFS 集合：使用 Set 代替 Queue，实现 O(1) 查找
  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);

  let step = 1;

  while (beginSet.size > 0 && endSet.size > 0) {
    step++;
    // 优化1：平衡扩展，总是选择节点数较少的方向进行扩展
    // 这可以将搜索空间从 O(b^d) 降低到 O(b^(d/2))
    if (beginSet.size > endSet.size) {
      const temp = beginSet;
      beginSet = endSet;
      endSet = temp;
    }

    const nextSet = new Set();

    // 遍历当前层
    for (const word of beginSet) {
      // 优化2：将字符串转为数组进行原地修改，避免频繁创建子字符串
      const chars = word.split("");

      for (let i = 0; i < chars.length; i++) {
        const originalChar = chars[i];

        // 尝试 26 个字母
        for (let k = 0; k < 26; k++) {
          const char = String.fromCharCode(97 + k);
          if (char === originalChar) continue;

          chars[i] = char;
          const next = chars.join("");

          // 关键：如果在对面集合中找到，说明两端连通，直接返回
          if (endSet.has(next)) {
            return step;
          }

          // 如果在字典中（且未访问过），加入下一层
          if (wordSet.has(next)) {
            nextSet.add(next);
            wordSet.delete(next); // 标记为已访问，防止回头
          }
        }
        // 恢复字符，准备下一次变换
        chars[i] = originalChar;
      }
    }
    beginSet = nextSet;
  }
  return 0;
};
// @lc code=end

// your test code here
ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

/*
// @lcpr case=start
// "hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]\n
// @lcpr case=end

// @lcpr case=start
// "hit"\n"cog"\n["hot","dot","dog","lot","log"]\n
// @lcpr case=end

 */
