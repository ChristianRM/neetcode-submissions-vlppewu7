class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // strs[] = [[hat], [pots]]
        // arr[] = [[hat]]
        console.log(strs)
        let arr = [];
        console.log('try')
        for(let i=0; i<strs.length; i++){
            if(i === 0){
                arr.push([strs[i]])
            }else{
                let newMap = new Map();
                for(let j=0; j<strs[i].length; j++){
                    newMap.set(strs[i][j], (newMap.get(strs[i][j]) ?? 0) + 1);
                }
                let ispushed = false;
                for(let z = 0; z<arr.length&&!ispushed; z++){
                    console.log(`arr counter ${z}`)
                    let arrMap = new Map();
                    for(let y =0; y<arr[z][0].length && ispushed === false; y++){
                        arrMap.set(arr[z][0][y], (arrMap.get(arr[z][0][y]) ?? 0) + 1);
                    }
                    if(areSetsEqual(newMap, arrMap)){
                        arr[z].push(strs[i])
                        ispushed = true
                        console.log(`pushing ${strs[i]} to ${arr[z]}`)
                        console.log(arr)
                    }
                }
                if(ispushed==false){
                    console.log('pushing')
                    console.log([strs[i]])
                    arr.push([strs[i]])
                    console.log(arr)

                }
                
                    
            }
        }
        console.log(arr)
        return arr
    }
}

function areSetsEqual(set1, set2){
    console.log('comparing')
    console.log("Map 1 keys:", [...set1.keys()], "Size:", set1.size);
    console.log("Map 2 keys:", [...set2.keys()], "Size:", set2.size);
    if(set1.size !== set2.size){
        return false
    } else {
        for(const [key, val] of set1){
            if(set2.get(key) !== val) return false
        }
        console.log('same')
        return true
    }
}
