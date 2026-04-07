class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for(let word of strs){
            result += word.length
            result += '#'
            result += word
        }
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let aux = ''
        let count = Number(0)
        let res = []
        for(let index of str){
            console.log(index)
            if(index === '#' && aux !== '' && count <=0){
                console.log(`Inserting ${aux}`)
                count = Number(aux)
                aux = ''
                if(count === 0) res.push('')
            } else {
                aux += index
                console.log(`aux + index ${aux} ${count-1}`)
                count--
                if(count === 0){
                    console.log(`pushing ${aux}`)
                    res.push(aux)
                    aux = ''
                }
            }
        }
        return res
    }
}
