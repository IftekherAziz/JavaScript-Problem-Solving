// Problem 1: Let’s play a mind game

/*function mindGame description:
This function will check sending number in parameter is a number and it's a positive number 
then it will do  a math operation and return the output. Otherwise it will show an error message.
*/

function mindGame(num) {
  const error = "Error: Please enter positive a number";
  if (typeof num === "number" && num >= 0) {
    return (num * 3 + 10) / 2 - 5;
  } else {
    return error;
  }
}


// Problem 2: Finding even or odd

/* function evenOdd description:
This function will check if parameter value is string then it will check string length 
is even or odd and return even or odd. Otherwise it will show an error message
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

// Problem 3: Is Less or Greater than seven

/* 
function isLGSeven description:  
This function will check if the input is a number or not. If the input is a number, it will check if the difference between the input and 7 is less than 7. 
If the difference is less than 7, it will return the difference. If the difference is greater than 7, it will return the double of the difference. 
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


// Problem 4: Finding Bad Data

/* 
function findingBadData description: 
This function will check if the input is an array or not. If the input is not an array, then it will show an error message.
Then it will check if any number is negative. If any number is negative, it will increase the num of bad data by 1. 
Finally, it will return the total number of bad data.
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

// Problem 5: Convert your gems into diamond

/* function gemsToDiamond description: 
This function will check if the input is a number or not. If the input is not a number, then it will show an error message.
First, it will convert total dimonds number from given total gems. If total dimond become 2000 or more then 2000 dimond will be deducted from calculated dimonds, and return the number
or, if together they have less than 2000 dimond it will retrun just total dimond's numbers immediately
*/
 function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {

   const errorMessage = "There is a problem with your given data. Please make sure all three given data are numbers";  
   if (typeof firstFriendGems == "number" && typeof secondFriendGems == "number" && typeof thirdFriendGems == "number") {
     const number = 1000;
     const firstFriendDiamond = firstFriendGems * 21;
     const secondFriendDiamond = secondFriendGems * 32;
     const thirdFriendDiamond = thirdFriendGems * 43;
     const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
     if (totalDiamond > number * 2) {
       const result = totalDiamond - 2000;
       return result;
     } else {
       return totalDiamond;
     }
   } 
   else {
     return errorMessage;
   }
 }