class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let toaddA = new Map();
        let toaddB = new Map();
        for(let i=0; i<s.length; i++){
            toaddA.has(s[i])? toaddA.set(s[i], toaddA.get(s[i]) + 1) : toaddA.set(s[i], 1)
        }
        for(let j=0; j<t.length; j++){
            toaddB.has(t[j])? toaddB.set(t[j], toaddB.get(t[j]) + 1) : toaddB.set(t[j], 1)
        }

        if (toaddA.size !== toaddB.size) {
            return false;
        }

        // 2. Iterar sobre el primer mapa y verificar la existencia y el valor de cada clave en el segundo mapa.
        for (let [key, value] of toaddA) {
            // toaddB.has(key) verifica si la clave existe.
            // toaddB.get(key) !== value compara los valores asociados.
            // Se usa .has() porque `undefined` es un valor legal en un Map,
            // y un simple .get() podría devolver undefined tanto para una clave inexistente como para una clave con valor undefined.
            if (!toaddB.has(key) || toaddB.get(key) !== value) {
            return false;
            }
        }
        return true
    }

}
