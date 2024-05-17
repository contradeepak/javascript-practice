function getMinIndex(arr, i){
    // this function returns the index of the minimum element in the range [i, n-1]
    let minIndex = i; // we assume first element of the range as the minimum element candidate 
    for(let j=i+1; j<arr.length; j++){
        // we go in the remaining array from [i+1, n]
        if(arr[j] < arr[minIndex]){
            minIndex=j;
    }
}
return minIndex;
}

function selectionSort(arr) { // we assume array is integer array
   for(let i=0; i< arr.length; i++){
    // [i, n-1] -> unsorted region
    let minIndex=getMinIndex(arr,i);

  if(i!=minIndex){
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

   }
}

let arr = [15, 6, 1, 3, -1, 2, 10];
selectionSort(arr);
console.log(arr);