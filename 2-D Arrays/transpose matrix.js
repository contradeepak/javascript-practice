867. Transpose Matrix (See leetcode for Daigram and full explanation).
Solved
Easy
Topics
Companies
Hint
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]


Solution : 

var transpose = function(matrix) {
 
    let result = []
    for (col = 0; col < matrix[0].length; col++) {
        result[col] = [] 
        for(row = 0; row< matrix.length; row++){
            result[col][row] = matrix[row][col] 
        }
    }

    return result

};