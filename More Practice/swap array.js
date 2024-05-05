function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0; // starting index
let j = arr.length - 1; // last index

while (i < j) { // Correcting the loop condition
    swap(arr, i, j);
    i++; // Increment i
    j--; // Decrement j
}

console.log(arr); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
