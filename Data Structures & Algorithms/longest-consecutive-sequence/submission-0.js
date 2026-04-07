class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let highestCounter = 0
        let currentCounter = 0
        let currentN
        function compareNumbers(a, b) {
            return a - b;
        }
        let sorted = nums.sort(compareNumbers)
        console.log('sorted'+sorted)
        let newSet = new Set(sorted)
        let iterator = newSet.keys()

        
        for(let key of iterator){
            console.log(key)
            if(currentN === undefined){
                console.log('initialized')
                currentCounter = 1
                highestCounter = 1
            } else {
                if(currentN+1 === key){
                    currentCounter++
                    if(currentCounter > highestCounter){
                        highestCounter = currentCounter
                    }
                } else {
                    currentCounter = 1
                }
            }
            currentN = key
            console.log(`currentN ${currentN}`)
            console.log(`currentCounter ${currentCounter}`)
            console.log(`highestCounter ${highestCounter}`)
        }
        return highestCounter
    }
}
