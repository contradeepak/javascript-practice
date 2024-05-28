function nge(arr){
    let n =  arr.length;
    let output = Array(n);
    let st = [];
    st.push(0);
    for(let i =1; i<n; i++){
     while(st.length > 0 && arr[i] > arr[st[st.length -1]]){
        output[st[st.length -1]] = arr[i];
        st.pop();
     }
     st.push(i);

    }
    while(st.length>0){
        let topOfStack = st[st.length - 1];
        output[topOfStack] = -1;
        st.pop();

    }
    return output;

}

let arr = [2,5,6,3,9,12,20,13,7,1,8,16,19];
console.log(nge(arr));

// Time Complexity : O(n)
// Space Complexity : O(n)
