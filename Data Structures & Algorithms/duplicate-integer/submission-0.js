class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let passed = new Set();
        for(let i = 0; i< nums.length; i++){
            if(passed.has(nums[i])){
                return true
            }
            passed.add(nums[i])
        }
        return false
    }
}
