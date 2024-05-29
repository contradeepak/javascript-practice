907. Sum of Subarray Minimums

Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.


Solution:



var sumSubarrayMins = function(arr) {
    const kMod = 1_000_000_007;
      const n = arr.length;
      let ans = 0;
      // prevMin[i] := index k s.t. arr[k] is the previous minimum in arr[:i]
      const prevMin = Array(n).fill(-1);
      // nextMin[i] := index k s.t. arr[k] is the next minimum in arr[i + 1:]
      const nextMin = Array(n).fill(n);
      const stack = [];
  
      for (let i = 0; i < n; i++) {
          const a = arr[i];
          while (stack.length && arr[stack[stack.length - 1]] > a) {
              const index = stack.pop();
              nextMin[index] = i;
          }
          if (stack.length) {
              prevMin[i] = stack[stack.length - 1];
          }
          stack.push(i);
      }
  
      for (let i = 0; i < n; i++) {
          ans += arr[i] * (i - prevMin[i]) * (nextMin[i] - i);
          ans %= kMod;
      }
  
      return ans;
  };