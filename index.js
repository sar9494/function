// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))
function sumOfTwoNum(num1, num2) {
  return num1 + num2;
}
console.log(sumOfTwoNum(21, 9856));
// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))
function TriangleArea(base, height) {
  return (base * height) / 2;
}
console.log(TriangleArea(10, 12));
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))
function RectanglePerimetre(height, width) {}
// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))
function SquareNumber(num) {
  return num * num;
}
console.log(SquareNumber(9));
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))
function HourToSecond(hours) {
  return hours * 3600;
}
console.log(HourToSecond(24));
// Create a function that  takes a string as argument and returns the length of this string.
function stringLength(str) {
  return str.length;
}
console.log(stringLength("hhe"));
// write a function that takes a string as argument and returns it to number

// write a function that takes a number as argument and returns it to string
function numberToString(num) {
  return num.toString();
}
console.log(numberToString(24));
// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

function checkFizzBuzz(num1) {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    return "FizzBuzz";
  } else if (num1 % 3 === 0) {
    return "Fizz";
  } else if (num1 % 5 === 0) {
    return "Buzz";
  } else {
    return num1;
  }
}
console.log(checkFizzBuzz(21));
// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040

// Example:
// > console.log(factorializer(7));
// > 5040

function factorial(num) {
  let reFactorial = 1;
  for (let i = 1; i < num + 1; i++) {
    reFactorial *= i;
  }
  return reFactorial;
}
console.log(factorial(7));
// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd

// Example:
// > console.log(oddOrEven(7));
// > "Odd"

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(7));
// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:

// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36
function addUp(num) {
  let sum = 0;
  for (let i = num; i >= 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(addUp(7));
// Exercise 5

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false
function isEmpty(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      counter++;
    }
  }
  if (counter === str.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(" a "));
// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.

// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true
function isEqualStr(str1, str2) {
  let counter = 0;
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if ((i == 0 || i == str1.length - 1) && str1.charAt(i) === " ") {
        counter++;
      }
    }
    const lengthStr1 = str1.length - counter;
    counter = 0;
    for (let i = 0; i < str2.length; i++) {
      if ((i == 0 || i == str2.length - 1) && str2.charAt(i) === " ") {
        counter++;
      }
    }
    const lengthStr2 = str2.length - counter;
    if (lengthStr2 === lengthStr1) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isEqualStr(" Simplon", "tunis "));
// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false
function oneDevideByTwo(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(oneDevideByTwo(14, 2));
// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
function match(str1, str2) {
  let str1Check = str1.trim();
  let str2Check = str2.trim();
  if (str1Check.length == str2Check.length) {
    if (str1Check.toUpperCase() == str2Check.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(match("HELLo WORLD", "hello world"));
// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

function getCase(str) {
  if (str == str.toUpperCase()) {
    return "upper";
  } else if (str == str.toLowerCase()) {
    return "lower";
  } else {
    return "mixed";
  }
}
console.log(getCase("SHoUT!"));
// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
function swapName(names) {
  let swapname = names.trim();
  let nameArray = swapname.split(" ");
  swapname = nameArray[1] + " " + nameArray[0];
  return swapname;
}
console.log(swapName("Alan Turing"));
// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
function AlphabetSoup(str) {
  let strArray = str.split("");
  strArray = strArray.sort();
  str = strArray.join();
  return str;
}
console.log(AlphabetSoup("simplon"));
// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3

function incrementOrDecrement(num) {
  if (num % 2 == 0) {
    return (num += 1);
  } else {
    return (num -= 1);
  }
}
console.log(incrementOrDecrement(5));
console.log("functions2");

// Exercise 1

// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.

// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%

// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
function tipAmount(num, str) {
  if (str === "good") {
    return (num * 20) / 100;
  } else if (str === "fair") {
    return (num * 15) / 100;
  } else if (str === "poor") {
    return (num * 10) / 100;
  } else {
    return "it's wrong answer";
  }
}
console.log(tipAmount(40, "fair"));
// Exercise 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally

// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function totalAmount(num, str) {
  if (str === "good") {
    return (num += (num * 20) / 100);
  } else if (str === "fair") {
    return (num += (num * 15) / 100);
  } else if (str === "poor") {
    return (num += (num * 10) / 100);
  } else {
    return "it's wrong answer";
  }
}
console.log(totalAmount(40, "fair"));
// Exercise 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.

// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23
function splitAmount(num, str, numberOfPeople) {
  if (str === "good") {
    return (num += (num * 20) / 100) / numberOfPeople;
  } else if (str === "fair") {
    return (num += (num * 15) / 100) / numberOfPeople;
  } else if (str === "poor") {
    return (num += (num * 10) / 100) / numberOfPeople;
  } else {
    return "it's wrong answer";
  }
}
console.log(splitAmount(40, "fair", 2));
// Exercise 4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
function isVowel(char) {
  if (
    (char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "u" ||
      char === "o") &&
    char.length == 1
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("a"));
// Exercise 5

// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors(player1, player2) {
  player1 = player1.toLowerCase().trim();
  player2 = player2.toLowerCase().trim();
  if (
    player1 !== "rock" ||
    player1 !== "paper" ||
    player1 !== "scissors" ||
    player2 !== "rock" ||
    player2 !== "paper" ||
    player2 !== "scissors"
  ) {
    if (player1 === player2) {
      return "draw";
    } else if (player1 === "rock") {
      if (player2 === "paper") {
        return "player 2";
      } else {
        return "player 1";
      }
    } else if (player1 === "paper") {
      if (player2 === "rock") {
        return "player 1";
      } else {
        return "player 2";
      }
    } else {
      if (player2 === "rock") {
        return "player 2";
      } else {
        return "player 1";
      }
    }
  }
}
console.log(rockPaperScissors("rock", "scissors"));
// Exercise 6

// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
function numberJoinerWhile(startNumber, endNumber) {
  let makedStr = "";
  for (let i = startNumber; i <= endNumber; i++) {
    if (i != endNumber) {
      makedStr += i + "_";
    } else {
      makedStr += i;
    }
  }
  return makedStr;
}
console.log(numberJoinerWhile(1, 10));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor(startNumber, endNumber) {
  let makedStr = "";
  if (startNumber <= endNumber) {
    let i = startNumber;
    while (i <= endNumber) {
      if (i != endNumber) {
        makedStr += i + "_";
      } else {
        makedStr += i;
      }
      i++;
    }
  } else {
    let i = startNumber;
    while (i >= endNumber) {
      if (i != endNumber) {
        makedStr += i + "_";
      } else {
        makedStr += i;
      }
      i--;
    }
  }
  return makedStr;
}
console.log(numberJoinerFor(10, 1));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy(startNumber, endNumber, between) {
  let makedStr = "";
  if (between == undefined) {
    if (startNumber <= endNumber) {
      let i = startNumber;
      while (i <= endNumber) {
        if (i != endNumber) {
          makedStr += i + "_";
        } else {
          makedStr += i;
        }
        i++;
      }
    } else {
      let i = startNumber;
      while (i >= endNumber) {
        if (i != endNumber) {
          makedStr += i + "_";
        } else {
          makedStr += i;
        }
        i--;
      }
    }
  } else {
    if (startNumber <= endNumber) {
      let i = startNumber;
      while (i <= endNumber) {
        if (i != endNumber) {
          makedStr += i + between;
        } else {
          makedStr += i;
        }
        i++;
      }
    } else {
      let i = startNumber;
      while (i >= endNumber) {
        if (i != endNumber) {
          makedStr += i + between;
        } else {
          makedStr += i;
        }
        i--;
      }
    }
  }
  return makedStr;
}
console.log(numberJoinerFancy(3, 6, "***BANANAS***"));
// Exercise 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(str) {
  let makedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    makedStr += str.charAt(i);
  }
  return makedStr;
}
console.log(reverse("skoob"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
  let words = str.split(" ");
  console.log(words);
  let longest = words[0];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        if (longest.length < words[j].length) {
          longest = words[j];
        }
      }
    }
  }

  return longest;
}
console.log(findLongestWord("a book full of dogs"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(str) {
  const words = str.split(" ");
  let newStr = "";
  for (let i = 0; i < words.length; i++) {
    if (
      words[i] === "heck" ||
      words[i] === "darn" ||
      words[i] === "dang" ||
      words[i] === "crappy"
    ) {
      words[i] = "";
    }
    newStr += words[i] + " ";
  }
  return newStr;
}
console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
// Exercise 8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(str) {
  let words = str.split(" ");
  let newStr = "";
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j == 0) {
        let char = words[i].charAt(0).toUpperCase();
        newStr += char;
      } else {
        newStr += words[i].charAt(j);
      }
    }
    newStr += " ";
  }
  return newStr;
}
console.log(capitalizeAll("every day is like sunday"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(str, splitStr) {
  let newArray = [];
  let arrayElement = "";
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    let counter = 0;
    if (str[i] === splitStr[0]) {
      for (let j = 0; j < splitStr.length; j++) {
        if (str[i+j] === splitStr[j]) {
          counter++;
        }
        if (counter === splitStr.length) {
          newArray.push(newWord);
          newWord = "";
        }
      }
    } else {
      newWord += str[i];
    }
  }
  newArray.push(newWord);
  return newArray;
}
console.log(split("a-b-c", "-"));
// Exercise 9

// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max(array) {
  let highest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (highest <= array[i]) {
      highest = array[i];
    }
  }
  return highest;
}
console.log(max([1, 2, 3, 4, 5, 16, 2, 3]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumNumbers([1, 2, 3]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(positives([1, -2, -3]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function even(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (evenOrOdd(array[i]) == "even") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(even([1, -2, -3, 2]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (evenOrOdd(array[i]) == "odd") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(odds([1, -2, -3, 2]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?

//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(integers([1.3, -2, -3.2, 2]));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }
  return newArray;
}
console.log(squareDance([1, -2, -3, 2]));
//Exercise

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function integersToTarget(nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        newArray.push(i, j);
      }
    }
  }

  return newArray;
}
console.log(integersToTarget([2, 7, 11, 15], 18));
//Exercise

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
function isPalindromeInteger(number) {
  const str = number.toString();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindromeInteger(1211));
//Exercise

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
function checkBrackets(str) {
  const openBracket = ["(", "{", "["];
  const closeBracket = [")", "}", "]"];
  let counter = 0;
  let index;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    for (let j = 0; j < openBracket.length; j++) {
      if (str[i] === closeBracket[j] && (index==undefined||index!=0)) {
        console.log("jegfia"+counter)
        return false;
      } else {
        if (str[i] === openBracket[j]) {
          counter++;
          for (let k = i + 1; k < str.length; k++) {
            if (str[k] === closeBracket[j]) {
              counter++;
              index=k;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  if (counter % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkBrackets("()") + " gc");
//Exercise

// write a JavaScript function that checks if the string is palindrome or not.

// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.

// Input: s = "dad"
// Output: true
// Example 2:

// Input: s = "civic"
// Output: true

// Input: s = "race"
// Output: false
function isPalindrome(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("rar"))