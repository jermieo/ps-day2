//   1 .Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

// let input = 8;

// function fibonacci(n) {
//   let num0 = 0;
//   let num1 = 1;

//   for (let i = 0; i < n; i++) {
//     if (i == 0 || i == 1) {
//       console.log(i);
//     } else {
//       sum = num0 + num1;
//       num0 = num1;
//       num1 = sum;
//       console.log(num1);
//     }
//   }
// }
// fibonacci(input);

// ------------------------------------------------------------------------------------------------------
//   2.Write a function that takes a number as input and returns the factorial of that number.
// let input = 5;
// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log("The factorial of " + input + " is: " + factorial(input));
// -----------------------------------------------------------------------------------------------------
// 3.Write a functionthat checks if a given string is a palindrome.
// let input = "amma";
// function Palindrome(string) {
//   let ans = string.split("").reverse().join("");
//   if (ans === string) {
//     return "is a Palindrome :" + ans;
//   } else {
//     return "is not a Palindrome :" + ans;
//   }
// }
// console.log(Palindrome(input));
// -------------------------------------------------------------------------------------------------------
// 4.Write a function that findsthe maximum and minimum elements in an array.
// let input = [22, 34, 55, 1, 34, 666, 9];
// function minandmax(input) {
//   let min = input[0];
//   let max = input[0];

//   for (let i = 1; i <= input.length; i++) {
//     if (input[i] < min) {
//       min = input[i];
//     }
//     if (input[i] > max) {
//       max = input[i];
//     }
//   }
//   return { min: min, max: max };
// }

// console.log(minandmax(input));
// ------------------------------------------------------------------------------------------------------
//  5.Explain the concept ofanagram and write a function to check if two strings are anagrams of eachother.

let input1 = "listen";
let input2 = "silent";

function areAnagrams(str1, str2) {
  let firstStr1 = str1.toLowerCase();
  let secondStr2 = str2.toLowerCase();

  let sortedStr1 = firstStr1.split("").sort().join("");
  let sortedStr2 = secondStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams(input1, input2));
