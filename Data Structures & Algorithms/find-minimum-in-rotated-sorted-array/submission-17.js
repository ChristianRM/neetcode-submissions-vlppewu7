class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0]
        let l = 0
        let r = nums.length-1
        let m
        while(l<r){
            m = Math.floor((r+l)/2)
            console.log(`L: ${l} R:${r} M:${m} min:${min}`)
            if(nums[m] < min){
                min = nums[m]
                r = m
            }else{
                l = m+1
            }
        }
        if(nums[r]<min) min = nums[r]
        return min

    }
}
