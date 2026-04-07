class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0
        for(let l=0; l<s.length; l++){
            let newMap = new Map()
            let maxRepeat = 0
            for(let r=l; r<s.length; r++){
                // if(!newMap.has(s[r])){
                //     if(newMap.size>2){
                //         break;
                //     }
                // }
                newMap.has(s[r]) ? newMap.set(s[r], newMap.get(s[r])+1): newMap.set(s[r], 1)
                if(newMap.get(s[r]) > maxRepeat) maxRepeat = newMap.get(s[r])

                if((r-l+1)-maxRepeat <= k){
                    if(r-l+1>maxLength){
                        maxLength = r-l+1
                    }
                }

            }
        }
        return maxLength
    }
}
