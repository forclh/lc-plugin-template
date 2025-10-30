/**
 * v1 动态规划（自底向上）
 * 在不超过背包容量的前提下，最多能装的价值是多少
 * @param {*} N 背包最多装 N 件物品
 * @param {*} W 背包的最大重量 W
 * @param {number[]} weight 物品的重量数组
 * @param {number[]} value 物品的价值数组
 */
let bagOne = function (N, W, weight, value) {
  // 定义：dp[i][w]表示当背包的容量为 w 时，只从前 i 个物品中选择的最大价值
  let dp = Array.from({ length: N + 1 }, () => new Array(W + 1).fill(0)); // base case 已初始化(i === 0 || w === 0, dp[i][w] = 0)

  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      // 索引从1开始所以要减去1
      if (weight[i - 1] > w) {
        dp[i][w] = dp[i - 1][w]; // 重量超出无法装入背包
      } else {
        // 选择装入或者不装入背包
        dp[i][w] = Math.max(
          dp[i - 1][w], // 不装入背包的价值
          // 装入背包的价值 = 当前物品的价值 + 在背包重量为背包容量减去当前物品的重量的情况下，选前i-1件物品的最大价值
          value[i - 1] + dp[i - 1][w - weight[i - 1]]
        );
      }
    }
  }

  return dp[N][W];
};

/**
 * v1 动态规划（自顶向下 + 备忘录）
 * 在不超过背包容量的前提下，最多能装的价值是多少
 * @param {*} N 背包最多装 N 件物品
 * @param {*} W 背包的最大重量 W
 * @param {number[]} weight 物品的重量数组
 * @param {number[]} value 物品的价值数组
 */
let bagTwo = function (N, W, weight, value) {
  let memo = Array.from({ length: N + 1 }, () => new Array(W + 1).fill(-1));
  return dp(N, W, weight, value, memo);
};

// 定义：返回表示当背包的容量为 w 时，只从前 n 个物品中选择的最大价值
let dp = function (n, w, weight, value, memo) {
  // 基础情况
  if (n === 0 || w === 0) return 0;

  // 检查备忘录
  if (memo[n][w] !== -1) return memo[n][w];

  // 核心逻辑：决策是否放入第n个物品（索引为n-1）
  if (weight[n - 1] > w) {
    // 如果第n个物品重量超过当前背包容量，则不能放入
    memo[n][w] = dp(n - 1, w, weight, value, memo);
  } else {
    // 否则选择价值更高的一种策略：放入或不放入第n个物品
    memo[n][w] = Math.max(
      dp(n - 1, w, weight, value, memo), // 不放入第n个物品
      value[n - 1] + dp(n - 1, w - weight[n - 1], weight, value, memo) // 放入第n个物品
    );
  }

  return memo[n][w];
};
