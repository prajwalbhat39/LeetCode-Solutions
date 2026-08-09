/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    adj= [];
    for(let i=0; i< numCourses ; i++){
        adj[i] = []
    }

    for(let preReq of  prerequisites){
        adj[preReq[0]].push(preReq[1])
    }

    let visited = new Array(numCourses).fill(0);
    // console.log(adj)
    var dfsIteration = function(element , adj){
        // console.log(element);
        // console.log(visited)
       if(visited[element] ===  2){
            return true;
        }

        visited[element] = 1;
        console.log(visited)
        for(let course of adj[element]){
            // console.log(adj[element])
            if(visited[course] === 1){
                
                return false;
            }else{
                let temp = dfsIteration(course, adj)
                if(!temp){
                    return false;
                }
            }
        }
        visited[element] += 1 ;
        return true;
    }

    for(let i= 0 ; i <numCourses ; i++){
        if(visited[i] === 0){
            let tempResult = dfsIteration(i, adj)
            if(!tempResult){
                return false;
            }
        }
    }
    return true;
};