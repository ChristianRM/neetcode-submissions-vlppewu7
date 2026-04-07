class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let a = []
        for(let i = 0; i<tokens.length; i++){
            let x, y
            console.log(a)
            console.log(tokens[i])
            switch(tokens[i]){
                case '+':
                    x = a.pop()
                    y = a.pop()
                    a.push(Number(x)+Number(y))
                    break;
                case '-':
                    x = a.pop()
                    y = a.pop()
                    a.push(Number(y)-Number(x))
                    break;
                case '*':
                    x = a.pop()
                    y = a.pop()
                    a.push(Number(x)*Number(y))
                    break;
                case '/':
                    x = a.pop()
                    y = a.pop()
                    a.push(Math.trunc(Number(y)/Number(x)))
                    break;
                default:
                    a.push(Number(tokens[i]))
                    break;
            }
        }
        if(a.length === 1){
            return a.pop()
        }
    }
}
