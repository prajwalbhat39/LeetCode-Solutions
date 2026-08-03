/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    var dfsGrid = function(i , j , m , n , grid){
        if(i >=m || j >=n ||  i < 0 || j< 0 || grid[i][j] === '0'){
            return ;
        }
        // console.log(i , j , grid[i][j])
        grid[i][j] = "0"; 

        dfsGrid( i+1 , j , m , n, grid);
        dfsGrid( i , j+1 , m , n , grid);
        dfsGrid( i-1 , j , m , n, grid);
        dfsGrid( i , j-1 , m , n, grid);

        

        return ;
       
    }

    let result = 0;
    let m = grid.length;
    let n = grid[0].length;
    for(let i = 0 ; i< m ; i++){
        for(let j=0; j< n ; j++){
            if(grid[i][j] === '1'){
                result+=1;
                dfsGrid(i , j , m , n , grid);
                // console.log(result)
            }else{
                continue
            }
        }
    }
    return result;
};