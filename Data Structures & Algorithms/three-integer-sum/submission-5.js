class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []
        for(let i=0; i<nums.length-2; i++){
            for(let j=i+1; j<nums.length-1; j++){
                for(let k=j+1; k<nums.length; k++){
                    if(nums[i]+nums[j]+nums[k] === 0){
                        console.log(nums[i],nums[j],nums[k])
                        if(output.length === 0 || !tripletExists([nums[i],nums[j],nums[k]], output)){
                            output.push([nums[i],nums[j],nums[k]])    
                        }
                    }
                }
            }
        }
        return output
    }
}

function tripletExists(triplet, arr){
    
    console.log(arr)

    for(let i=0; i<arr.length; i++){
        if(triplet.indexOf(arr[i][0]) != -1 && triplet.indexOf(arr[i][1]) != -1 && triplet.indexOf(arr[i][2]) != -1){
            return true
        }
    }
    return false
}
