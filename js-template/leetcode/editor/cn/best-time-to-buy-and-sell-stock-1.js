/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30203
 *
 * [121] 买卖股票的最佳时机
 */

// import { ListNode } from "../common/listNode.js";
// import { TreeNode } from "../common/treeNode.js";

// @lc code=start
/**
 * v1 贪心算法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  // 因为股票只能买卖一次，那么贪心的想法很自然就是取最左最小值，取最右最大值，
  // 那么得到的差值就是最大利润。
  let low = Number.MAX_SAFE_INTEGER;
  let result = 0;
  for (const price of prices) {
    low = Math.min(low, price); // 取最左最小价格
    result = Math.max(result, price - low); // 取最大区间利润
  }
  return result;
};
// @lc code=end

// your test code here

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
