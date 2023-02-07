/* You will be given a function called “mindGame()” which will take a positive number as input.
Now your task: 
You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.

Sample Input & Output:-
Input: 5
Output: 10

Input: 50
Output: 75

Input: 33
Output: 49.5
*/

// Problem 1: Let’s play a mind game

/*function mindGame description:
This function will check sending number in parameter is a number and it's a positive number then it will do  a math operation and
return the output. Otherwise sr than it will show an error message */

function mindGame(num) { 
    const error = 'Error: Please enter positive a number';
    if (typeof num === 'number' && num >= 0) {
        return (num * 3 + 10) / 2 - 5;
    }
    else{
        return error;
    }
    
}
console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));
console.log(mindGame('abul'));
console.log(mindGame(-5));