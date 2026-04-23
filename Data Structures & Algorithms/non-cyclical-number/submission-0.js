class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let sum = n
        let mySet = new Set()
        while(sum!=1){
            let s = sum+''
            console.log(`sum before ${sum}`)
            sum = 0
            for(let i=0; i<=s.length-1; i++){
                console.log(Math.pow(s[i],2))
                sum+=Math.pow(s[i],2)
            }
            console.log(`sum result ${sum}`)
            
            if(mySet.has(sum)){
                return false
            }else{
                mySet.add(sum)
                console.log(mySet)
            }
        }
        return true
    }
}
