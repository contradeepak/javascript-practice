// Decimal to Binary 

// whatever number we have, we can check if the number is odd or even.
// Based on this we can detect the last.
// Now the remaining bits can be calculated using no/2 value.

function decimalToBinary(num) {
    let ans = " ";
    while (num>0){
        if(num%2==0){
        ans = "0" + ans;
        } else {
        ans = "1" + ans;
        }
        num = Math.floor(num/2);
    }
    return ans;
}

console.log(decimalToBinary(2));
