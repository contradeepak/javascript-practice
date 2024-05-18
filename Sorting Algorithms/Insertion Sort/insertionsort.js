function insertionsort(arr){
    for(let i=1; i<arr.length; i++){
        let currElement = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > currElement) {
            arr[j+1] = arr[j];
            j--;

        }
        arr[j+1] = currElement;
    }
}

let arr = [4, 5, 34, -3, 34, 57, 8, 90, 123, 89, -123, -9];
insertionsort(arr);
console.log(arr);