
 // Print elements in 2D arrays row wise



 function display(grid) {
    // print the whole grid by row
    // number of rows = gri.length
    let str = "";
    for(let i=0; i<grid.length; i++){
        for (let j=0; j< grid[i].length; j++){
            str += grid[i][j] + " ";
        }
    }
   console.log("str");

 }

 let grid = [ [0,1,2,3], [5,6,7,8], [9,10,11,12], [13,14,15,16]];

 display(grid);