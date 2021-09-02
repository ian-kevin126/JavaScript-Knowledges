var maxProfit = function(prices) {
    let maxProfit = 0, costPrice = prices[0];
    
	for(let i = 1; i < prices.length; i++) {
		maxProfit = Math.max(maxProfit, (prices[i] - costPrice));
		costPrice = Math.min(costPrice, prices[i]);
	}
	return maxProfit;
};