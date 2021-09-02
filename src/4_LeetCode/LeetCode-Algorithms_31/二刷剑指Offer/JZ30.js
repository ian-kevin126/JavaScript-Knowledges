function FindGreatestSumOfSubArray(array) {
  if (array.length === 0) return [];
  let max = array[0];
  const dp = [array[0]];
  for (let i = 1; i < array.length; i++) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
