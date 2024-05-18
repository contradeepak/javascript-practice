function swap(arr, i, j){
    let temp =arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

function partition(arr, pivotIndex) {
    let pivotElement = arr[pivotIndex];
    let L = 0; R = arr.length-1;
    let i = L -1;

    swap(arr, pivotIndex, R);
    let j = L;
    while(j <=R -1){
        if(arr[j] <=pivotElement) {
            i++;
            swap(arr, i, j);
          
        }
        j++;
    }
    swap(arr, i+1, R);
}
let arr = [1,5,6,7,8,9,10,-4];
pivotIndex = 2;
partition(arr, pivotIndex)
console.log(arr);