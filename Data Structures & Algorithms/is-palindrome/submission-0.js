class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regex = /([a-zA-Z0-9])/;
        let stack = []
        let reverse = []
        for(let i=0; i<s.length; i++){
            console.log(`checking ${s[i]}`)
            if(regex.test(s[i])){
                stack.push(s[i].toLowerCase())
                reverse.unshift(s[i].toLowerCase())
                console.log(`added ${s[i]}`)

            }
        }
        
        for(let i=0; i<stack.length; i++){
            if(stack[i]!==reverse[i]){
                return false
            }
        }
        return true
    }
}
