84. Largest Rectangle in Histogram


Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

var largestRectangleArea = function(heights) {
    let stack = [];
  stack.push(-1);
  stack.push(0);
  let maxarea = heights[0];
  for(let i = 1; i< heights.length; i++){
      if(heights[i]>=heights[stack[stack.length-1]])
          stack.push(i);
      else {
          while(stack[stack.length-1] >= 0 && heights[i] <= heights[stack[stack.length-1]]){
              let ind = stack.pop();
              maxarea = Math.max(maxarea, (i - stack[stack.length-1] -1)*heights[ind]);
          }
          stack.push(i)
      }
  }

  while(stack[stack.length-1] >= 0){
      let ind = stack.pop();
      maxarea = Math.max(maxarea, (heights.length - stack[stack.length-1] -1)*heights[ind]);
  }
  return maxarea;
};