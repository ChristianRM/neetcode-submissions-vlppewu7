class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=[]
        let postfix=[]
        let output=[]
        for(let i=0; i<nums.length; i++){
            prefix.push((nums[i]) * (prefix.length===0 ? 1 : prefix[prefix.length-1]))
            postfix.push((nums[nums.length - (i+1)]) * (postfix.length===0 ? 1 : postfix[postfix.length-1]))
            console.log(prefix)
            console.log(postfix)
        }
        for(let i=0; i<nums.length; i++){
            let temp = 1
            console.log(prefix[i-1])
            console.log(postfix[nums.length-(i+1)])
            i===0? temp*= 1: temp *= prefix[i-1]
            i===nums.length-1? temp *= 1: temp *= postfix[nums.length-i-2]
            console.log('result '+ temp)
            output.push(temp)
        }
        return output
    }
}
