class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0
        let bottom = matrix.length-1
        let middle
        console.log(matrix)
        console.log(`target = ${target}`)
        while(top<=bottom){
            middle = Math.floor((top+bottom)/2)
            console.log(`TOP: ${top} BOTTOM:${bottom} MIDDLE:${middle}`)
            if(target<matrix[middle][0]){
                bottom = middle - 1
            } else if(target>matrix[middle][matrix[middle].length-1]){
                top = middle + 1
            } else{
                break;
            }
        }
        console.log(`Middle: ${middle}`)
        let l = 0;
        let r = matrix[middle].length-1;
        let m
        while(l<=r){
            m = Math.floor((l+r)/2)
            console.log(`L: ${l} R:${r} M:${m}`)
            if(target < matrix[middle][m]){
                r = m-1
            } else if(target > matrix[middle][m]) {
                l = m+1
            } else {
                return true
            }
        }
        return false
    }
}
