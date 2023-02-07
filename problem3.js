/* 
You will be given a function called “isLGSeven()”. It will take a number as input.
Now your task: you have to find the absolute difference between the input value and 7. 
If this difference is less than 7, you must return the difference between that input and 7. 
Otherwise you have to return double of their absolute difference. 

Sample Input & Output:-
Input : 6
Output: -1

Input: -15
Output: -22

Input: 15
Output: 30 (16)
*/

// Problem 3: Is Less or Greater than seven

/* 
function isLGSeven description:  
This function will check if the input is a number or not. If the input is a number, 
it will check if the difference between the input and 7 is less than 7. If the difference is less than 7, 
it will return the difference. If the difference is greater than 7, it will return the double of the difference. 
If the input is not a number, it will return an error message. 
*/

function isLGSeven(num) {
    const error = 'Invalid Input: Please enter a number';
    if(typeof num === 'number'){
        difference = num - 7;
        if (difference < 7) {
          return difference;
        } else {
          return difference * 2;
        } 
    }
    else {
        return error;
    }
}
console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));
console.log(isLGSeven('abc'));
 