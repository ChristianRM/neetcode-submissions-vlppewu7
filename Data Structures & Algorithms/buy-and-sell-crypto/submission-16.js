class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let min = null
        let max = null
        let best = []
        for(let i=0; i<prices.length; i++){
            if(min === null || prices[i] < min){
                console.log(min, max)
                console.log(`new min ${min} ${prices[i]}  ${(!min || prices[i] < min)}`)
                min = prices [i]
                max = null
                console.log(min)
                
            }else if (prices[i]> min && (!max || prices[i] > max) ) {
                max = prices[i]
                console.log(min,max)
                console.log('new Max '+ (best.length === 0 && (max-min > (best[1] - best[0]))))
                if(best.length === 0 || (max-min > (best[1] - best[0]))){
                    console.log(best)
                    best = [min, max]
                    console.log(`new best ${best}`)
                }
            }
        }
        return best.length!==0? best[1]-best[0] : 0
    }
}
