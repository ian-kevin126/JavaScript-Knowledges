var containsDuplicate = function(nums) {
    let hash = {};
    
	for (let i = 0; i < nums.length; i++) {
		let a = nums[i];
		hash[a] = hash[a] || 0;
		hash[a]++;
		if (hash[a] === 2) return true;
	}
	return false;
};