//e.g. 1

const arr = [2, 4, 8, 6, 9];
function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);
