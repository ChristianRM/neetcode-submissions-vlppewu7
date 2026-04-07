class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftWalls = []
        let rightWalls = []
        let highestLeft = 0
        let highestRight = 0
        let result = 0
        for(let i=0; i<height.length; i++){
            if(i===0){
                leftWalls.push(0)
                rightWalls.unshift(0)
            } else {
                highestLeft = highestLeft<height[i-1]? height[i-1] : highestLeft
                highestRight = highestRight<height[height.length-(i)]? height[height.length-(i)] : highestRight
                leftWalls.push(highestLeft)
                rightWalls.unshift(highestRight)
            }
        }
        for(let i=0; i<height.length; i++){
            const diff = Math.min(leftWalls[i],rightWalls[i]) - height[i]
            result = diff > 0 ? result+diff : result
        }
        return result
    }
}
