// Qs: Given an  array which only contains 0 and 1. The data is shuffled randomly.
// Write a function that can rearrange the data such that all the zeroes are present before 1.

// e.g [1,0,0,1,1,1,0,1,0,0,1]
// [0,0,0,0,0,1,1,1,1,1,1]

// don't create new array, do not use any internal function, you can read/traverse the array only once.

function swap(arr, i, j) {
      let temp =arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
}
function separate(arr){
    let i = 0;
    let j = arr.length-1;

    while(i<=j) {
        // till the time i and j have not passed each other
        if(arr[i]==1){ // we just check if we have 1 at index i, does not matter what we have at index j
        swap(arr, i, j);
        j--; // include the new 1 we threw in the right window
        } else {
            i++; // expand the left window directly
        }
    }
}

let arr = [1,1,1,0,1,0,0,0,1,0,1];
separate(arr) // transform our original array
console.log(arr);

