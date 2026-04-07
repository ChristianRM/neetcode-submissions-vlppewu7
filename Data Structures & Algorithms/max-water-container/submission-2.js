class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let highest = 0
        for(let i=0; i<heights.length-1; i++){
            for(let j= i+1; j<heights.length; j++){
                const lowest = heights[i] < heights[j] ? heights[i] : heights[j]
                const separation =  j-i
                if(separation*lowest > highest){
                    highest = separation*lowest
                }
            }
        }
        return highest

    }
}
