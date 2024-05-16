function f(coins, x){
    if(x<=0) return 0;
let result = Infinity;
for(let i=0; i< coins.length; i++){
    result = Math.min(result, x-coins[i]);

}
return 1 + result;
}
console.log(f([1,5,7], 11));