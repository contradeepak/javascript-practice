// Qs- Given a number n, print the first n natural numbers in increasing order recursively.

// eg n=6;

// output 
// 1
// 2
// 3
// 4
// 5
// 6

function f(n){
    // base case
    if(n<1){
        // do not do anything
        return;

    }
    // recursive assumption;
    f(n-1); // function f works correctly for n-1 and prints 1-> n-1 correctly on the screen
    console.log(n);

}

f(8);
