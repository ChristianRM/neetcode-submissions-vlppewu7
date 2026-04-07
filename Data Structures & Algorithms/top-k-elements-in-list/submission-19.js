class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i=0; i<nums.length; i++){
            map.set(nums[i], (map.get(nums[i])||0) +1)
            console.log(`Key ${nums[i]} Val ${map.get(nums[i])}`)
        }
        let arr = new Array()
        console.log(arr.length)
        for(const [key,val] of map){
            console.log(`Checking Key ${key} Value ${val}`)
            if(arr.length === 0){
                arr.push(key)
            } else {
                let ispushed = false
                console.log(`Arr Length ${arr.length} K ${k} Arr ${arr}`)

                for(let index=arr.length; index>-1 && ispushed === false; index--){
                    console.log(`comparing ${val} ${map.get(arr[index])} ${val >= map.get(arr[index])}`)
                    if(val >= map.get(arr[index])){
                        ispushed=true;
                        arr.splice(index+1, 0, key);
                        console.log(`Pushed Key ${key} added Arr ${arr}`)
                    }
                }
                if(!ispushed){
                    arr.unshift(key)
                    console.log(`WasnotPushed Key ${key} added Arr ${arr}`)
                }
            }
        }
        console.log('------')
        console.log(arr)
        return arr.slice(arr.length-k,arr.length)
    }
}
