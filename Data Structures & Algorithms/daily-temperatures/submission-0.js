class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let results = []
        for(let i=0; i<temperatures.length; i++){
            let res = 0;
            if(i!=temperatures.length-1){
                for(let j=i+1; j<temperatures.length; j++){
                    if(temperatures[i]<temperatures[j]){
                        res = j-i
                        break;
                    }
                }
            }
            results.push(res)
        }
        return results
    }
}
