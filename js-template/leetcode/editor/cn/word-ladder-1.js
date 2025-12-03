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
 * v1 BFS
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  // 将 wordList 转换为 Set 以提高查找效率 (O(1))
  const wordSet = new Set(wordList);
  // 如果 endWord 不在字典中，无法转换，直接返回 0
  if (!wordSet.has(endWord)) return 0;

  // BFS 队列，初始包含 beginWord
  const queue = [beginWord];
  // 记录已访问过的单词，避免重复处理
  const visited = new Set();
  visited.add(beginWord);
  // 序列长度初始化为 1 (包含 beginWord 本身)
  let len = 1;

  while (queue.length > 0) {
    const sz = queue.length;
    // 遍历当前层的所有节点
    for (let i = 0; i < sz; i++) {
      const cur = queue.shift();
      // 找到目标单词，返回当前序列长度
      if (cur === endWord) return len;
      // 尝试变换当前单词的每一个字符
      for (const next of getNeighbor(cur)) {
        // 如果变换后的单词在字典中且未访问过
        if (wordSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    // 当前层遍历结束，长度 +1
    len++;
  }

  // 队列为空仍未找到 endWord，表示无法到达
  return 0;
};

// 辅助函数：生成所有可能的邻居节点（只改变一个字符）
function getNeighbor(word) {
  const chars = word.split("");
  const res = [];
  for (let i = 0; i < word.length; i++) {
    const originalChar = chars[i];
    for (let j = 0; j < 26; j++) {
      let char = String.fromCharCode(j + 97);
      if (char === originalChar) continue;
      // 拼接新单词
      chars[i] = char;
      const newWord = chars.join("");
      res.push(newWord);
    }
    chars[i] = originalChar;
  }
  return res;
}
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
