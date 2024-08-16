function isAnagram(str1, str2){
    const lowerCaseString1 = str1.toLowerCase();
    const arr1 = lowerCaseString1.split("")
    arr1.sort()
    const SortedString1 = arr1.join(" ");

    const lowerCaseString2 = str2.toLowerCase();
    const arr2 = lowerCaseString2.split("")
    arr2.sort()
    let sortedString2 = arr2.join("");

    if(sortedString1 == sortedString2){
        return true;

    } else {
        return false;
    }


}

module.exports = isAnagram;