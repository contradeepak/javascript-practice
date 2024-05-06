let grid = [ [1,2,3,4,5], [3,4,2,5,6,7], [3,89,8,5,6], [5,6,3,4,5,6,] ];
console.log(grid);


// To Create a 2D array of 5*6 (5 rows and 6 colums) and every cell of the second array should be 0

let arr = Array(5);
for(let i=0; i<5 ; i++)
    {
        let inner = Array(6).fill(0);
        arr[i]=inner;
    }

    console.log(arr);

 // Assigning values in 2-D arrays
 
 arr[0][0] = 11;
 arr[0][1] = 12;
 console.log(arr);


 // Fetch a value

 console.log(arr[0][1]);




