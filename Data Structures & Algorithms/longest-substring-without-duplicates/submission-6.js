class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let substring = []
        let counter = 0
        let longest = 0
        for(let i=0; i<s.length; i++){
            const index = substring.indexOf(s[i])
            if(index === -1){
                substring.push(s[i])
                counter++
                if(counter > longest){
                    longest = counter
                }
            } else {
                console.log(`${s[i]} found ${substring}`)
                substring = substring.slice(index+1, undefined)
                substring.push(s[i])
                counter = substring.length
                console.log(substring)
            }
            // if(!map.has(s[i])){
            //     map.set(s[i])
            //     counter++
            //     if(counter > longest){
            //         longest = counter
            //     }
            // } else {
            //     map.clear()
            //     map.set(s[i])
            //     counter = 1
            // }
        }
        return longest
    }
}
