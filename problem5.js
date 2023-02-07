/*  
You will be given a function called gemsToDiamond(). 
It will take three numbers (the number of gems of your 3 friends) as input.

Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43

[Gems capacity means how many diamonds a gem can be converted into. ]

Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. 
If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond.

Sample Input & Output:-

Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303
*/

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

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));
console.log(gemsToDiamond(1, 1, "a"));
