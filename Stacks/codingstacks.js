function insertAtBottom(st, x){
    // Time complexity O(n)
    // Space complexity O(n)

    let temp = [];
    while(st.length != 0){
        let el = st[st.length-1];
        temp.push(el);
        st.pop();
    }
    st.push(x);
    while(temp.length != 0){
        let el = temp[temp.length-1];
        st.push(el);
        temp.pop();
    }
}

function reverse(st) {
    // time complexity O(N*N)
    // space complexity O(N)
    if(st.length == 0) return;
    let el = st[st.length - 1];
    st.pop();
    reverse(st);
    insertAtBottom(st, el);
    return;
}

let st = [1,2,3,4,5];
reverse(st);
console.log(st);
