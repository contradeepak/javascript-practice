function checkPalindrome(num) {
    let str = num.toString();
    let i = 0;
    let j = str.length - 1;
    while (i < j) { // Change to '<' instead of '<='
        if (str[i] !== str[j]) { // Change to '!=='
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(checkPalindrome(19998781)); // Output: true
