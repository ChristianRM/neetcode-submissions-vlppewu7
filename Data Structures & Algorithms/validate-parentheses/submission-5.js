class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        try{
            if(s.length % 2 !== 0) return false
            let pars = []
            let openers = ['(', '{', '[']
            let closeners = [')', '}', ']']
            for(let i=0; i<s.length; i++){
                console.log('for ' + s[i])
                if(openers.indexOf(s[i]) != -1){
                    pars.push(s[i])
                } else if(closeners.indexOf(s[i]) != -1){
                    if(pars.length > 0){
                        switch(s[i]){
                            case ')':
                                if(pars[pars.length-1] === '(') {
                                    pars.pop()
                                }else{
                                    throw new Error()
                                }
                                break;
                            case '}':
                                if(pars[pars.length-1] === '{') {
                                    pars.pop()
                                }else{
                                    throw new Error()
                                }
                                break;
                            case ']':
                            if(pars[pars.length-1] === '[') {
                                    pars.pop()
                                }else{
                                    throw new Error()
                                }
                                break;
                            default:
                                throw new Error()
                        }

                    } else {
                        throw new Error()
                    }
                }
                console.log(pars)
            }
            if(pars.length === 0)
                return true
            return false

        } catch(e) {
            console.log('error')
            return false

        }
    }
}
