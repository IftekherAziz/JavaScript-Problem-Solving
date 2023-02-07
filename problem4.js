/* 
You will be given a function called findingBadData(). 
It will take an array as input. Any number of numbers will be in the array. 
Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). 

If any number is negative we will call it "Bad Data". If a number is positive, we will call it "Good Data".
Now you have to find out how many bad data are there in your task: array and return that number.

Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0

Input: [ 2, -5, -7, -13 ]
Output: 3

Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/

// Problem 4: Finding Bad Data

/* 
function findingBadData description: 
This function will check if the input is an array or not. If the input is not an array, then it will show an error message.
Then it will check if any number is negative. If any number is negative, it will increase the count by 1. Finally, it will return the total number of bad data.
*/
function findingBadData(inputArray) {
    
    const error = 'Invalid Input: Please enter an array';
    if (!Array.isArray(inputArray)) {
      return error;
    }
    let totalBadData = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] < 0) {
        totalBadData++;
      }
    }
    return totalBadData;
}
console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
console.log(findingBadData('abc'));
console.log(findingBadData(123));