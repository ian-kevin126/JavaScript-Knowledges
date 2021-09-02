var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(each=> each+extraCandies>=max)
};