/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    res =[]
    const backtrack = function(start , path){
        if(path.length === k){
            res.push([...path]);
            return;
        }
        for(let i= start ; i<=n ; i++){
            path.push(i)
            backtrack(i+1 , path)
            path.pop()
        }
        return;
    }
    backtrack(1, [])
    return res;
    
};