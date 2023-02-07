
/*
You will be given a function called evenOdd()”. It will take a string as input.
Now you have to give the output based on the total number of characters in your task: String. Output will be 'Even' or 'Odd'.

Sample Input & Output:-
Input: 'Phero'
Output: Odd

Input: 'Batch7'
Output: Even

Input: 'chatgpt'
Output: Odd
*/

// Problem 2: Finding even or odd

/* function evenOdd description:
This function will check if parameter value is string then it will check string length is even or odd and return even or odd.
Otherwise it will show an error message
 */

function evenOdd(str) {
    const error = 'Error: Please enter a string';
    if (typeof str === 'string'){
         if (str.length % 2 == 0) {
           return "Even";
         } else {
           return "Odd";
         }
    }
    else {
        return error;
    } 
}
console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd(12));



