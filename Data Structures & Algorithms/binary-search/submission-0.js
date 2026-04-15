class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length-1
        let m
        if(nums[0]===target) return 0
        if(nums[r]===target) return r
        while(l<r){
            m= Math.floor((l+r)/2)
            console.log(`L:${l} R:${r} M:${m}`)
            if(nums[m]<target){
                l = m+1
            }else {
                r = m
            }
        }
        return nums[l]===target? l : -1
    }
}
