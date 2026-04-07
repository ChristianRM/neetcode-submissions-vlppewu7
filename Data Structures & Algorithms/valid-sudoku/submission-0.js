class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let boardMap = new Map();
        for(let i=0; i<board.length; i++){
            const row = i
            for(let j=0; j<board[i].length; j++){
                const col = j
                const cellValue = board[row][col]
                if(cellValue!=='.'){
                    if(boardMap.get('row'+row)){
                        if(boardMap.get('row'+row).indexOf(cellValue)!==-1){ return false}
                        boardMap.get('row'+row).push(cellValue)
                        console.log(boardMap)
                    } else {
                        boardMap.set('row'+row, [cellValue])
                        console.log(boardMap)
                    }
                    if(boardMap.get('col'+col)){
                        if(boardMap.get('col'+col).indexOf(cellValue)!==-1){ return false}
                        boardMap.get('col'+col).push(cellValue)
                        console.log(boardMap)
                    } else {
                        boardMap.set('col'+col, [cellValue])
                        console.log(boardMap)
                    }
                    // quadrant
                    let quadrant = (val) => { 
                        if([0,1,2].includes(val)){
                            return 0
                        } else if([3,4,5].includes(val)){
                            return 1
                        } else {
                            return 2
                        }
                    }
                    if(boardMap.get('quadrant'+quadrant(row)+quadrant(col))){
                        if(boardMap.get('quadrant'+quadrant(row)+quadrant(col)).indexOf(cellValue)!==-1){ return false}
                        boardMap.get('quadrant'+quadrant(row)+quadrant(col)).push(cellValue)
                        console.log(boardMap)
                    } else {
                        boardMap.set('quadrant'+quadrant(row)+quadrant(col), [cellValue])
                        console.log(boardMap)
                    }
                }
            }
        }
        return true
    }
}
