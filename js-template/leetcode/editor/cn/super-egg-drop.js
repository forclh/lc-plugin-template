/*
 * @lc app=leetcode.cn id=887 lang=javascript
 * @lcpr version=30203
 *
 * [887] 鸡蛋掉落
 */

// import {ListNode} from "../common/listNode.js";
// import {TreeNode} from "../common/treeNode.js";

// @lc code=start
/**
 * v1 动态规划（自顶向下+备忘录）
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
let superEggDrop = function (k, n) {
  let memo = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(-1));
  return dp(k, n, memo);
};
// dp(k,n)表示k个相同鸡蛋和n层楼时确定f的最小操作次数
let dp = function (k, n, memo) {
  if (k === 1) return n;
  if (n === 0) return 0;

  if (memo[k][n] !== -1) return memo[k][n];

  let res = Number.MAX_SAFE_INTEGER;
  // 做选择
  // 在所有楼层进行尝试，取最少扔鸡蛋次数
  for (let i = 1; i <= n; i++) {
    // 碎或者没碎取最坏情况
    res = Math.min(
      res,
      Math.max(dp(k - 1, i - 1, memo), dp(k, n - i, memo)) + 1
    );
  }
  // 结果存入备忘录
  memo[k][n] = res;
  return res;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// 1\n2\n
// @lcpr case=end

// @lcpr case=start
// 2\n6\n
// @lcpr case=end

// @lcpr case=start
// 3\n14\n
// @lcpr case=end

 */
